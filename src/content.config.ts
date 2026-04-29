import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const propiedadesCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/propiedades" }),
  schema: z.object({
    title: z.string(),
    operation: z.enum(['Arriendo', 'Venta']),
    type: z.enum(['Departamento', 'Casa', 'Oficina']),
    price: z.string(),
    address: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    area: z.number(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  propiedades: propiedadesCollection,
};
// Force content reload
