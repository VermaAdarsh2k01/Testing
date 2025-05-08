// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'wigbnd4f',
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
  })]
});