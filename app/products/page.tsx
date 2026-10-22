"use client";

import { useMemo, useState } from "react";

import ProductsHero from "../components/products/ProductHero";
import ProductsToolbar from "../components/products/ProductToolbar";
import ProductsGrid from "../components/products/ProductsGrid";

import { PRODUCTS } from "../constants/product";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <ProductsHero />

      <ProductsToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        totalProducts={filteredProducts.length}
      />

      <ProductsGrid
        products={filteredProducts}
      />
    </>
  );
}