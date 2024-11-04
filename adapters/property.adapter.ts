export default function propertyAdapter(data: any): Property {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    description: data.description,
    price: data.price,
    coverImage: data.coverImage ? data.coverImage : '/placeholder-image.png',
    images: data.images,
    category: data.category,
    contacts: data.contacts
  };
}
