import { get } from '../../../utils/fetch';
import propertyAdapter from '../../../adapters/property.adapter';

export async function getProperties(
  page: string
): Promise<PropertiesResult | null> {
  const data = await get('/property', {
    page: page
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
