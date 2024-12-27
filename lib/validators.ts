import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const priceSchema = z
  .string()
  .refine(
    (price) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(price))),
    {
      message: 'Price must be a valid number with up to 2 decimal places',
    }
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  slug: z.string().min(3, { message: 'Slug must be at least 3 characters' }),
  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters' }),
  brand: z.string().min(3, { message: 'Brand must be at least 3 characters' }),
  price: priceSchema,
  description: z.string().min(3, {
    message: 'Description must be at least 3 characters',
  }),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, { message: 'At least one image is required for product' }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});

export const signinFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});
