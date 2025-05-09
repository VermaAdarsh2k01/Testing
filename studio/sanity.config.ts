import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'test',

  projectId: 'wigbnd4f',
  dataset: 'production',
  apiVersion: '2023-08-01',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
