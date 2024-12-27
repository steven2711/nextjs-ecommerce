'use server';

import { PrismaClient } from '@prisma/client';
import { toPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return toPlainObject(data);
}
