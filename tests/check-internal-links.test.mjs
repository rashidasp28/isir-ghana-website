import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const checker = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'scripts',
  'check-internal-links.mjs',
)

async function fixture({ readme = '# Fixture\n', baseline = [] } = {}) {
  const root = await mkdtemp(path.join(tmpdir(), 'isir-links-'))

  for (const directory of ['app', 'components', 'data', 'docs', 'config']) {
    await mkdir(path.join(root, directory), { recursive: true })
  }

  await writeFile(path.join(root, 'README.md'), readme)
  await writeFile(
    path.join(root, 'app', 'page.tsx'),
    'export default function Page() { return null }\n',
  )
  await writeFile(
    path.join(root, 'config', 'internal-link-baseline.json'),
    `${JSON.stringify({ version: 1, missing: baseline }, null, 2)}\n`,
  )

  return root
}

function run(root) {
  return spawnSync(process.execPath, [checker], {
    cwd: root,
    encoding: 'utf8',
  })
}

test('accepts a route that exists in the App Router', async () => {
  const root = await fixture({ readme: '[Home](/)\n' })
  const result = run(root)

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /Internal link check passed\./)
})

test('rejects a missing internal route', async () => {
  const root = await fixture({ readme: '[Missing](/not-a-route)\n' })
  const result = run(root)

  assert.equal(result.status, 1)
  assert.match(result.stderr, /README\.md:1 -> \/not-a-route/)
})

test('accepts an explicit legacy exception', async () => {
  const root = await fixture({
    readme: '[Pending document](/documents/pending.pdf)\n',
    baseline: ['README.md -> /documents/pending.pdf'],
  })
  const result = run(root)

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stderr, /Legacy exception:/)
})

test('rejects a stale legacy exception', async () => {
  const root = await fixture({
    baseline: ['README.md -> /documents/removed.pdf'],
  })
  const result = run(root)

  assert.equal(result.status, 1)
  assert.match(result.stderr, /Stale baseline entry:/)
})

test('rejects duplicate baseline entries', async () => {
  const entry = 'README.md -> /documents/pending.pdf'
  const root = await fixture({ baseline: [entry, entry] })
  const result = run(root)

  assert.equal(result.status, 1)
  assert.match(result.stderr, /must not contain duplicate entries/)
})
