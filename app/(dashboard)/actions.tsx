'use server';

import { remove } from 'utils/fetch';
import { revalidateUrl } from '@/app/actions';

export async function deleteProperty(formData: FormData) {
  await remove(`/property/${formData.get('id')}`, formData);

  await revalidateUrl('/');
}
