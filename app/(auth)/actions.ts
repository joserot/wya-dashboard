'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { ACCESS_TOKEN_NAME } from 'constants/api';
import { API_URL } from 'constants/api';
import { redirect } from 'next/navigation';

export default async function login(prevState: any, formData: FormData) {
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
      const errorMessage = await res.text();
      return { message: errorMessage };
    }

    await setAuthCookie(res);

    redirect('/');
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return { message: 'Error en la autenticación' };
  }
}

export const setAuthCookie = async (response: Response) => {
  const cookiesStore = await cookies();

  const setCookieHeader = response.headers.get('Set-Cookie');

  if (setCookieHeader) {
    const token = setCookieHeader.split(';')[0].split('=')[1];

    await cookiesStore.set({
      name: ACCESS_TOKEN_NAME,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000)
    });
  }
};

export async function getSession() {
  let cookie = await cookies().get(ACCESS_TOKEN_NAME);

  const token = await cookie?.value;

  if (!token) return;

  const user = await jwtDecode(token);

  return user;
}

export const logout = async () => {
  (await cookies()).set(ACCESS_TOKEN_NAME, '');
};
