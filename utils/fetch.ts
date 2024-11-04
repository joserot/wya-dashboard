'use server';

import { cookies } from 'next/headers';
import axiosInstance from '@/lib/axios-instance';

const getHeaders = () => ({
  Cookie: cookies().toString()
});

export const post = async (path: string, formData: FormData) => {
  try {
    const res = await axiosInstance.post(path, Object.fromEntries(formData), {
      headers: { 'Content-Type': 'application/json', ...getHeaders() }
    });
    return res.data;
  } catch (error) {
    return { data: null, error };
  }
};

export const get = async (path: string, params?: any) => {
  try {
    const res = await axiosInstance.get(path, {
      headers: { ...getHeaders() },
      params: params
    });

    return res.data;
  } catch (error) {
    return { data: null, error };
  }
};

export const remove = async (path: string, formData: FormData) => {
  try {
    const params = Object.fromEntries(formData);
    const res = await axiosInstance.delete(path, {
      headers: { ...getHeaders() },
      data: params
    });
    return res.data;
  } catch (error) {
    return { data: null, error };
  }
};
