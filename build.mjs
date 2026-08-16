import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

await build({
  root: projectRoot,
  configFile: path.join(projectRoot, 'vite.config.js'),
})
