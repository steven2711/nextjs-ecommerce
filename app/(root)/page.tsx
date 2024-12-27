import { Button } from '@/components/ui/button';
import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

// used for testing loading page
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  const latestProducts = await getLatestProducts();
  // await delay(2000);
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
