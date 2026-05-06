import chokidar from 'chokidar'
import { buildBanks } from './build-banks.mjs'

let running = false
let queued = false

async function rebuild(_, path) {
  console.log('[watch-banks] file', path, 'changed, rebuilding...')
  if (running) {
    queued = true
    return
  }

  running = true
  try {
    await buildBanks()
  } catch (error) {
    console.error('[watch-banks] build failed', error)
  } finally {
    running = false
    if (queued) {
      queued = false
      void rebuild()
    }
  }
}

chokidar.watch('content/banks', { ignoreInitial: true }).on('all', rebuild)

console.log('[watch-banks] watching content/banks...')
