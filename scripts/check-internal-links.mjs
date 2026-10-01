import { access, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const baselinePath = process.env.INTERNAL_LINK_BASELINE_PATH
  ? path.resolve(process.env.INTERNAL_LINK_BASELINE_PATH)
  : path.join(root, 'config', 'internal-link-baseline.json')
const sourceRoots = ['app', 'components', 'data', 'docs']
const rootDocuments = ['README.md']
const sourceExtensions = new Set(['.md', '.ts', '.tsx'])

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)))
    } else if (
      entry.isFile() &&
      sourceExtensions.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(absolutePath)
    }
  }

  return files
}

function lineNumber(source, offset) {
  return source.slice(0, offset).split('\n').length
}

function collectLinks(source, filePath) {
  const matches = []
  const patterns = [
    /\bhref\s*=\s*["']([^"']+)["']/g,
    /\b(?:href|file)\s*:\s*["']([^"']+)["']/g,
    /\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,
  ]

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      matches.push({
        destination: match[1],
        filePath,
        line: lineNumber(source, match.index),
      })
    }
  }

  return matches
}

function normalizeDestination(destination) {
  return destination.split('#', 1)[0].split('?', 1)[0]
}

function isIgnored(destination) {
  return (
    destination === '' ||
    destination.startsWith('#') ||
    destination.startsWith('http://') ||
    destination.startsWith('https://') ||
    destination.startsWith('mailto:') ||
    destination.startsWith('tel:')
  )
}

function routePattern(filePath) {
  const relativePath = path.relative(path.join(root, 'app'), filePath)
  const directory = path.dirname(relativePath)
  const segments = directory === '.' ? [] : directory.split(path.sep)
  const routeSegments = segments.filter(
    (segment) => !segment.startsWith('(') && !segment.startsWith('@'),
  )
  const pattern = routeSegments
    .map((segment) => {
      if (/^\[\[\.\.\..+\]\]$/.test(segment)) return '(?:/.*)?'
      if (/^\[\.\.\..+\]$/.test(segment)) return '/.+'
      if (/^\[.+\]$/.test(segment)) return '/[^/]+'
      return `/${segment.replace(/[.*+?^$()|[\]\\]/g, '\\$&')}`
    })
    .join('')

  return new RegExp(`^${pattern || '/'}$`)
}

async function exists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function loadBaseline() {
  const raw = await readFile(baselinePath, 'utf8')
  const parsed = JSON.parse(raw)

  if (
    parsed.version !== 1 ||
    !Array.isArray(parsed.missing) ||
    parsed.missing.some((entry) => typeof entry !== 'string')
  ) {
    throw new Error(
      'config/internal-link-baseline.json must contain version 1 and a missing string array.',
    )
  }

  if (new Set(parsed.missing).size !== parsed.missing.length) {
    throw new Error(
      'config/internal-link-baseline.json must not contain duplicate entries.',
    )
  }

  return new Set(parsed.missing)
}

async function main() {
  const baseline = await loadBaseline()
  const sourceFiles = []

  for (const directory of sourceRoots) {
    sourceFiles.push(...(await walk(path.join(root, directory))))
  }

  for (const document of rootDocuments) {
    sourceFiles.push(path.join(root, document))
  }

  const routeFiles = (await walk(path.join(root, 'app'))).filter((filePath) =>
    /(?:page|route)\.tsx?$/.test(filePath),
  )
  const routePatterns = routeFiles.map(routePattern)
  const links = []

  for (const filePath of sourceFiles) {
    const source = await readFile(filePath, 'utf8')
    links.push(...collectLinks(source, filePath))
  }

  const uniqueLinks = new Map()

  for (const link of links) {
    const key = `${link.filePath}:${link.line}:${link.destination}`
    uniqueLinks.set(key, link)
  }

  const violations = []
  const acceptedLegacyLinks = []
  const observedMissingLinks = new Set()

  for (const link of uniqueLinks.values()) {
    if (isIgnored(link.destination)) continue

    const destination = normalizeDestination(link.destination)
    let valid = false

    if (destination.startsWith('/')) {
      const publicPath = path.join(root, 'public', destination)
      valid =
        (await exists(publicPath)) ||
        routePatterns.some((pattern) => pattern.test(destination))
    } else {
      valid = await exists(path.resolve(path.dirname(link.filePath), destination))
    }

    if (!valid) {
      const sourcePath = path.relative(root, link.filePath).split(path.sep).join('/')
      const baselineKey = `${sourcePath} -> ${link.destination}`
      observedMissingLinks.add(baselineKey)

      if (baseline.has(baselineKey)) {
        acceptedLegacyLinks.push(`${sourcePath}:${link.line} -> ${link.destination}`)
      } else {
        violations.push(`${sourcePath}:${link.line} -> ${link.destination}`)
      }
    }
  }

  for (const baselineKey of baseline) {
    if (!observedMissingLinks.has(baselineKey)) {
      violations.push(
        `Stale baseline entry: ${baselineKey}. Remove it because the link is now valid or no longer present.`,
      )
    }
  }

  console.log(
    `Checked ${uniqueLinks.size} static internal links across ${sourceFiles.length} source files.`,
  )

  for (const legacyLink of acceptedLegacyLinks) {
    console.warn(`Legacy exception: ${legacyLink}`)
  }

  if (violations.length > 0) {
    console.error('\nInternal link check failed:')

    for (const violation of violations) {
      console.error(`- ${violation}`)
    }

    process.exitCode = 1
    return
  }

  console.log('Internal link check passed.')
}

main().catch((error) => {
  console.error(`Internal link check could not run: ${error.message}`)
  process.exitCode = 1
})
