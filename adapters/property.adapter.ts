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
    latitudeAndLongitude: data.latitudeAndLongitude ?? null,
    location: data.location ?? null,
    totalArea: data.totalArea ?? null,
    coveredArea: data.coveredArea ?? null,
    rooms: data.rooms ?? null,
    bathrooms: data.bathrooms ?? null,
    garages: data.garages ?? null,
    contacts: data.contacts
  };
}
