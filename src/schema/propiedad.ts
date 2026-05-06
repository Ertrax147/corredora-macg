import { defineField, defineType } from 'sanity';

export const propiedad = defineType({
  name: 'propiedad',
  title: 'Propiedad',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Propiedad',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Amigable (Slug)',
      type: 'slug',
      options: {
        source: (doc) => {
          const type = doc.type ? doc.type.toString().toLowerCase() : 'propiedad';
          const op = doc.operation ? doc.operation.toString().toLowerCase() : 'venta';
          const address = doc.address ? doc.address.toString() : '';
          
          const beds = doc.bedrooms ? `-${doc.bedrooms}-hab` : '';
          const baths = doc.bathrooms ? `-${doc.bathrooms}-banos` : '';
          
          // Genera un código aleatorio corto (ej. a7f2) para garantizar que NUNCA se repita
          const uniqueSuffix = Math.random().toString(36).substring(2, 6);
          
          if (address) {
            return `${op}-${type}-en-${address}${beds}${baths}-${uniqueSuffix}`;
          }
          return `${doc.title || 'propiedad'}-${uniqueSuffix}`;
        },
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .normalize('NFD') // Normaliza para separar caracteres de sus tildes/acentos
          .replace(/[\u0300-\u036f]/g, '') // Elimina las tildes
          .replace(/\s+/g, '-') // Cambia espacios por guiones
          .replace(/[^\w\-]+/g, '') // Elimina caracteres especiales
          .slice(0, 96)
      },
      validation: (Rule) => Rule.required(),
      description: 'Haz clic en "Generate" para crear un link automático optimizado para Google (ej. venta-casa-en-pucon), o escríbelo manualmente.',
    }),
    defineField({
      name: 'operation',
      title: 'Operación',
      type: 'string',
      options: {
        list: [
          { title: 'Arriendo', value: 'Arriendo' },
          { title: 'Venta', value: 'Venta' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Propiedad',
      type: 'string',
      options: {
        list: [
          { title: 'Casa', value: 'Casa' },
          { title: 'Departamento', value: 'Departamento' },
          { title: 'Oficina', value: 'Oficina' },
          { title: 'Parcela', value: 'Parcela' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (ej. UF 5.000 o $550.000)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección o Ubicación Corta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Dormitorios',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Baños',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'parking',
      title: 'Estacionamientos',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'storage',
      title: 'Bodegas',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'area',
      title: 'Superficie Total (m²)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Galería de Fotos',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Link de Video (YouTube, Instagram, TikTok, Drive, etc.)',
      type: 'url',
      description: 'Pega aquí el enlace de tu video. Es opcional.',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Detallada',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'images.0',
    },
  },
});
