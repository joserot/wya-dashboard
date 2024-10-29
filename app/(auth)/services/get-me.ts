import { get } from '../../../utils/fetch';
import UserAdapter from 'adapters/user.adapter';

export async function getMe() {
  const data = await get('/auth/me');

  return UserAdapter(data);
}
