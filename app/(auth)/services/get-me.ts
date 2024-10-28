import { get } from '../../../utils/fetch';

export async function getMe() {
  const data = await get('/auth/me');

  return data;
}
