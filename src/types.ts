export interface Propiedad {
  slug: string;
  title: string;
  type: string;
  operation: 'Arriendo' | 'Venta';
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string | null;
}
