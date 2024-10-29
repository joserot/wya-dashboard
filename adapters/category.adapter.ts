export default function categoryAdapter(data: any): Category {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    description: data.description
  };
}
