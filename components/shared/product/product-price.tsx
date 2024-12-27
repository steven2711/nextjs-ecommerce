import { cn } from '@/lib/utils';

export default function ProductPrice({
  price,
  className,
}: {
  price: number;
  className?: string;
}) {
  // ensure two decimal places
  const formattedPrice = price.toFixed(2);

  // get int and float
  const [intValue, floatValue] = formattedPrice.split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
