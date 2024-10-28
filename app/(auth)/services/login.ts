'use server';

import { API_URL } from 'constants/api';

import { setAuthCookie } from '@/app/(auth)/actions';

export default async function login(formData: FormData) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    });

    if (!res.ok) {
      return res;
    }

    await setAuthCookie(res);

    return res;
  } catch (error) {
    console.error('Error en la autenticación:', error);
  }
}
