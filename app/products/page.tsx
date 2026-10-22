"use client";

import { useState } from "react";

import ProductsHero from "../components/products/ProductHero";
import ProductsToolbar from "../components/products/ProductToolbar";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <ProductsHero />

      <ProductsToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        totalProducts={0}
      />
    </>
  );
}