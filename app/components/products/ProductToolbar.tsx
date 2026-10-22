"use client";

import { Search, X } from "lucide-react";

import { PRODUCT_CATEGORIES } from "../../constants/categories";

type ProductsToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  totalProducts: number;
};

export default function ProductsToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  totalProducts,
}: ProductsToolbarProps) {
  const hasFilter =
    category !== "All" || search.trim() !== "";

  return (
    <section className="sticky top-20 z-30 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Search */}

        <div className="relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-gray-200 pl-14 pr-4 outline-none transition focus:border-green-600"
          />
        </div>

        {/* Categories */}

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {PRODUCT_CATEGORIES.map((item) => (
            <button
              key={item}
              onClick={() =>
                onCategoryChange(item)
              }
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === item
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-6 flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing{" "}
            <span className="font-semibold text-green-700">
              {totalProducts}
            </span>{" "}
            products
          </p>

          {hasFilter && (
            <button
              onClick={() => {
                onSearchChange("");
                onCategoryChange("All");
              }}
              className="inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
            >
              <X size={18} />

              Clear Filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}