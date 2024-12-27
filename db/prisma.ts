import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  neonConfig.wsProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
}

declare global {
  var prisma: ReturnType<typeof prismaWithExtensions> | undefined;
}

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaNeon(pool);

const prismaWithExtensions = () =>
  new PrismaClient({
    adapter,
  }).$extends({
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });

export const prisma = global.prisma || prismaWithExtensions();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
