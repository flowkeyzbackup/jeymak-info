"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { PRODUCTS } from "../../constants/product";
import ProductCard from "../../components/products/ProductCard";
import ProductFilters from "../../components/products/ProductFilters";

export default function FeaturedProducts() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (product) => product.category === category
        );

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
              Featured Products
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
              Fresh Produce From Trusted Farms Across Nigeria
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore our carefully selected agricultural products,
              sourced from trusted farmers and supplied with quality
              you can rely on.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
          >
            View All Products

            <ArrowRight
              size={20}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Filters */}

        <div className="mt-12">
          <ProductFilters
            category={category}
            onChange={setCategory}
          />
        </div>

        {/* Products */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
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