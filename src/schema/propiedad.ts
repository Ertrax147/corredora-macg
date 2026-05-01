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
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Detallada',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Link de Video (YouTube, Instagram, TikTok, Drive, etc.)',
      type: 'url',
      description: 'Pega aquí el enlace de tu video. Es opcional.',
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
