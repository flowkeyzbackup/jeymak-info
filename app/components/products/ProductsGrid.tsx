import ProductCard from "./ProductCard";

import type { Product } from "../../types/product";

type ProductsGridProps = {
  products: Product[];
};

export default function ProductsGrid({
  products,
}: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            No Products Found
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We couldn't find any products matching your search.
            Try another category or search term.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}