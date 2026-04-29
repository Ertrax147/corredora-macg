import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { propiedad } from './src/schema/propiedad';

export default defineConfig({
  name: 'default',
  title: 'MACG Propiedades',

  projectId: 'nfw68tne',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [propiedad],
  },
});
