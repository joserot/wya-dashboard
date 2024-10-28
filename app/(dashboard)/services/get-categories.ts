import { get } from '../../../utils/fetch';
import categoryAdapter from '../adapters/category.adapter';

export async function getProperties(): Promise<Category[]> {
  const data = await get('/category');

  return data.map((property: any) => categoryAdapter(property));
}
