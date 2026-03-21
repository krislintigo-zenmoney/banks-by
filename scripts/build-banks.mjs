import { promises as fs } from 'node:fs'
import path from 'node:path'

const BANKS_DIR = path.resolve('app/data/banks')
const OUTPUT_FILE = path.resolve('app/data/generated/banks.json')

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(raw)
}

export async function buildBanks() {
  const entries = await fs.readdir(BANKS_DIR, { withFileTypes: true })
  const bankDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)

  const banks = []

  for (const dirName of bankDirs) {
    const baseDir = path.join(BANKS_DIR, dirName)

    const info = await readJson(path.join(baseDir, 'info.json'))
    const status = await readJson(path.join(baseDir, 'status.json'))
    const sync = await readJson(path.join(baseDir, 'sync.json'))

    banks.push({ ...info, ...status, ...sync })
  }

  banks.sort((a, b) => b.rating - a.rating)

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true })
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(banks, null, 2) + '\n', 'utf-8')

  console.log(`Built ${banks.length} banks`)
}

buildBanks().catch((error) => {
  console.error(error)
  process.exit(1)
})
