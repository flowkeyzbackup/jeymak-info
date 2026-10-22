import { Wheat, ShoppingBasket } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
          <ShoppingBasket size={38} />
        </div>

        <h1 className="mt-8 text-5xl font-bold lg:text-6xl">
          Our Agricultural Products
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
          Browse our carefully selected collection of grains,
          vegetables, fruits, livestock, seeds and fertilizers,
          sourced from trusted farms across Nigeria.
        </p>

        <div className="mt-10 inline-flex items-center rounded-full bg-white/10 px-5 py-3 backdrop-blur">
          <Wheat
            size={20}
            className="mr-2"
          />

          Premium Quality Produce
        </div>
      </div>
    </section>
  );
}