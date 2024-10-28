import { get } from '../../../utils/fetch';
import propertyAdapter from '../adapters/property.adapter';

export async function getProperties(): Promise<Property[]> {
  const data = await get('/property');

  if (!data || data.length === 0) return [];

  return data.map((property: any) => propertyAdapter(property));
}
