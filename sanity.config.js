import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deskStructure} from './components/deskStructure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'paragon-test',

  projectId: 'tq7jx7md',
  dataset: 'production',

  plugins: [structureTool(structureTool
    ({structure: deskStructure}),
    visionTool(),
    media()
  )],

  schema: {
    types: schemaTypes,
  },
});
