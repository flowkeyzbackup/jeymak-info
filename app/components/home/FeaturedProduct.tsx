import { PRODUCTS } from "../../constants/product";
import ProductCard from "../../components/products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <p className="mt-4 text-gray-600">
          Explore some of our best-selling agricultural products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}