import Button from "../../components/ui/Button";
import { COMPANY } from "../../constants/company";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello ${COMPANY.name}, I want to order ${product.name}.`
  );

  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <div className="flex h-56 items-center justify-center bg-gray-100">
        <span className="text-gray-400">Image Coming Soon</span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-sm text-green-700">
            {product.category}
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {product.name}
          </h3>
        </div>

        <p className="text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-green-700">
              {product.price}
            </p>

            <p className="text-sm text-gray-500">
              {product.quantity}
            </p>
          </div>

          <Button
            href={`https://wa.me/${COMPANY.phone}?text=${whatsappMessage}`}
          >
            Order
          </Button>
        </div>
      </div>
    </article>
  );
}