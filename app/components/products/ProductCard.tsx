import Image from "next/image";
import { MessageCircle } from "lucide-react";

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
    `Hello ${COMPANY.name}, I'm interested in ordering ${product.name}. Please provide more information.`
  );

  return (
    <article className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={450}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow">
          {product.category}
        </span>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {product.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-green-700">
              {product.price}
            </p>

            <span className="mt-2 inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
              {product.quantity}
            </span>
          </div>
        </div>

        <Button
          href={`https://wa.me/${COMPANY.phone}?text=${whatsappMessage}`}
          className="mt-8 flex w-full items-center justify-center gap-2"
        >
          <MessageCircle size={18} />

          Order on WhatsApp
        </Button>
      </div>
    </article>
  );
}