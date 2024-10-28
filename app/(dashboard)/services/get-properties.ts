import { get } from '../../../utils/fetch';
import propertyAdapter from '../adapters/property.adapter';

export async function getProperties(): Promise<Property[]> {
  const data = await get('/property');

  return data.map((property: any) => propertyAdapter(property));
}
