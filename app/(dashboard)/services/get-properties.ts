import { get } from '../../../utils/fetch';
import propertyAdapter from '../../../adapters/property.adapter';

export async function getProperties(
  page: string,
  categorySlug?: string | null
): Promise<PropertiesResult | null> {
  const data = await get('/property', {
    page: page,
    categorySlug: categorySlug
  });

  if (!data || data.length === 0) return null;

  return {
    properties: data.properties.map((property: any) =>
      propertyAdapter(property)
    ),
    totalProperties: data.totalItems,
    totalPages: data.totalPages,
    currentPage: data.currentPage
  };
}
