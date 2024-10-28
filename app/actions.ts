'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateUrl(url: string) {
  revalidateTag(url);
}
