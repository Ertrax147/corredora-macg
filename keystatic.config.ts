import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    propiedades: collection({
      label: 'Propiedades',
      slugField: 'title',
      path: 'src/content/propiedades/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título del Aviso' } }),
        operation: fields.select({
          label: 'Operación',
          options: [
            { label: 'Arriendo', value: 'Arriendo' },
            { label: 'Venta', value: 'Venta' },
          ],
          defaultValue: 'Arriendo',
        }),
        type: fields.select({
          label: 'Tipo de Propiedad',
          options: [
            { label: 'Departamento', value: 'Departamento' },
            { label: 'Casa', value: 'Casa' },
            { label: 'Oficina', value: 'Oficina' },
          ],
          defaultValue: 'Departamento',
        }),
        price: fields.text({ label: 'Precio (ej: $650.000 o UF 8.500)' }),
        address: fields.text({ label: 'Dirección o Sector' }),
        bedrooms: fields.integer({ label: 'Dormitorios', defaultValue: 0 }),
        bathrooms: fields.integer({ label: 'Baños', defaultValue: 1 }),
        area: fields.integer({ label: 'Metros Cuadrados (m²)', defaultValue: 50 }),
        images: fields.array(
          fields.image({
            label: 'Foto',
            directory: 'public/images/propiedades',
            publicPath: '/images/propiedades/',
          }),
          {
            label: 'Galería de Fotos'
          }
        ),
        content: fields.markdoc({ label: 'Descripción Detallada' }),
      },
    }),
  },
});
