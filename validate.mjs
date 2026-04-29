import { z } from 'zod';
import fs from 'fs';
import yaml from 'yaml'; // Astro uses yaml

const schema = z.object({
  title: z.string(),
  operation: z.enum(['Arriendo', 'Venta']),
  type: z.enum(['Departamento', 'Casa', 'Oficina']),
  price: z.string(),
  address: z.string(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  area: z.number(),
  images: z.array(z.string()).optional(),
});

const content = fs.readFileSync('src/content/propiedades/casa-de-prueba-2.mdoc', 'utf8');
const frontmatter = content.split('---')[1];
const parsed = yaml.parse(frontmatter);

try {
  schema.parse(parsed);
  console.log('Valid!');
} catch (e) {
  console.log('Invalid:', e.errors);
}
