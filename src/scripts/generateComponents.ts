import fs from 'node:fs'
import path, { basename, dirname } from 'node:path'

import { components } from './components'

console.log(components)
const payload = components
  .map((component) => {
    console.log(component)
    const files = component.files?.map((file) => {
      const content = fs.readFileSync(path.join(process.cwd(), file.path), 'utf8')

      return {
        name: basename(file.path),
        dir: dirname(file.path),
        placementDir: file.folder,
        type: file.type,
        content,
      }
    })

    return {
      ...component,
      files,
    }
  })
  .sort((a, b) => {
    if (a.name < b.name)
      return -1

    if (a.name > b.name)
      return 1

    return 0
  })

fs.writeFileSync(
  path.join(process.cwd(), 'public/api/components.json'),

  JSON.stringify(payload, null, 2),
)
