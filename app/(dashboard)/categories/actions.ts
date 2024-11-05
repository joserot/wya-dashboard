'use server';

import { post } from 'utils/fetch';
import { revalidateUrl } from '@/app/actions';

export async function addCategory(prevState: any, formData: FormData) {
  try {
    await post('/category', formData);

    await revalidateUrl('/');

    return { message: 'Categoría creada correctamente', ok: true };
  } catch (error: any) {
    return {
      message: error.message || 'Error al crear la categoría',
      ok: false
    };
  }
}
