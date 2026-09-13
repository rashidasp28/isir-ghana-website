import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const publicDirectory = path.join(root, 'public')
const baselinePath = path.join(root, 'config', 'media-size-baseline.json')

const limits = {
  image: 5 * 1024 * 1024,
  video: 20 * 1024 * 1024,
}

const imageExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.svg',
  '.webp',
])

const videoExtensions = new Set([
  '.m4v',
  '.mov',
  '.mp4',
  '.webm',
])

function mediaKind(filePath) {
  const extension = path.extname(filePath).toLowerCase()

  if (imageExtensions.has(extension)) return 'image'
  if (videoExtensions.has(extension)) return 'video'
  return null
}

function formatMiB(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MiB`
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)))
    } else if (entry.isFile()) {
      files.push(absolutePath)
    }
  }

  return files
}

async function loadBaseline() {
  const raw = await readFile(baselinePath, 'utf8')
  const parsed = JSON.parse(raw)

  if (
    parsed.version !== 1 ||
    !parsed.oversized ||
    typeof parsed.oversized !== 'object' ||
    Array.isArray(parsed.oversized)
  ) {
    throw new Error(
      'config/media-size-baseline.json must contain version 1 and an oversized object.',
    )
  }

  for (const [filePath, bytes] of Object.entries(parsed.oversized)) {
    if (!Number.isInteger(bytes) || bytes <= 0) {
      throw new Error(
        `Baseline value for ${filePath} must be a positive integer byte count.`,
      )
    }
  }

  return parsed.oversized
}

async function main() {
  const baseline = await loadBaseline()
  const files = await walk(publicDirectory)
  const mediaFiles = files
    .map((absolutePath) => ({
      absolutePath,
      relativePath: path.relative(root, absolutePath).split(path.sep).join('/'),
      kind: mediaKind(absolutePath),
    }))
    .filter((file) => file.kind)

  const measured = new Map()
  const violations = []
  const acceptedLegacyFiles = []

  for (const file of mediaFiles) {
    const { size } = await stat(file.absolutePath)
    measured.set(file.relativePath, size)

    const limit = limits[file.kind]
    if (size <= limit) continue

    const previousSize = baseline[file.relativePath]

    if (previousSize && size <= previousSize) {
      acceptedLegacyFiles.push({
        path: file.relativePath,
        size,
        previousSize,
      })
      continue
    }

    if (previousSize) {
      violations.push(
        `${file.relativePath} is ${formatMiB(size)}, above its legacy baseline of ${formatMiB(previousSize)}.`,
      )
    } else {
      violations.push(
        `${file.relativePath} is ${formatMiB(size)}, above the ${formatMiB(limit)} ${file.kind} limit.`,
      )
    }
  }

  for (const filePath of Object.keys(baseline)) {
    if (!measured.has(filePath)) {
      violations.push(
        `${filePath} is listed in the media baseline but no longer exists. Remove the stale baseline entry.`,
      )
    }
  }

  console.log(
    `Checked ${mediaFiles.length} media files: images must be at most ${formatMiB(limits.image)} and videos at most ${formatMiB(limits.video)}.`,
  )

  for (const file of acceptedLegacyFiles) {
    console.warn(
      `Legacy exception: ${file.path} is ${formatMiB(file.size)} and may not grow beyond ${formatMiB(file.previousSize)}.`,
    )
  }

  if (violations.length > 0) {
    console.error('\nMedia size check failed:')

    for (const violation of violations) {
      console.error(`- ${violation}`)
    }

    console.error(
      '\nCompress or resize the asset. Do not add a baseline exception for new media.',
    )
    process.exitCode = 1
    return
  }

  console.log('Media size check passed.')
}

main().catch((error) => {
  console.error(`Media size check could not run: ${error.message}`)
  process.exitCode = 1
})
