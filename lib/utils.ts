import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert a prisma object to a plain object
export function toPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// format number with decimal places
export function formatNumberWithDecimal(number: number): string {
  const [integer, decimal] = number.toString().split('.');

  return decimal ? `${integer}.${decimal.padEnd(2, '0')}` : `${integer}.00`;
}
