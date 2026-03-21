import banks from './app/data/banks.json' with { type: 'json' }
import fs from 'node:fs'

for (const {
  id,
  name,
  engName,
  syncType,
  category,
  website,
  rating,
  //
  syncStatus,
  lastCheck,
  status,
  updates,
  //
  connection,
  features,
  integration,
  supported,
} of banks) {
  const dir = `./app/data/banks/${id}`

  fs.mkdirSync(dir, { recursive: true })

  fs.writeFileSync(
    `./app/data/banks/${id}/info.json`,
    JSON.stringify({ id, name, engName, syncType, category, website, rating }, null, 2),
  )
  fs.writeFileSync(
    `./app/data/banks/${id}/status.json`,
    JSON.stringify({ syncStatus, lastCheck, status, updates }, null, 2),
  )
  fs.writeFileSync(
    `./app/data/banks/${id}/sync.json`,
    JSON.stringify({ connection, features, integration, supported }, null, 2),
  )
}
