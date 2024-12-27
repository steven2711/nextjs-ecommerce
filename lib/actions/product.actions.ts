'use server';

import { prisma } from '@/db/prisma';
import { toPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

export async function getLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: LATEST_PRODUCTS_LIMIT,
    });

    return toPlainObject(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const data = await prisma.product.findFirst({
      where: { slug },
    });
    return toPlainObject(data);
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
