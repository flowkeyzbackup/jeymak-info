import { Users, Leaf, Truck, Sprout } from "lucide-react";

import { STATISTICS } from "../../constants/statistics";

const ICONS = {
  customers: Users,
  farmers: Sprout,
  products: Leaf,
  delivery: Truck,
};

export default function Statistics() {
  return (
    <section className="bg-green-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-200">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Supporting Agriculture Across Nigeria
          </h2>

          <p className="mt-6 text-lg leading-8 text-green-100">
            We are committed to supplying premium agricultural
            products while building long-term relationships with
            customers and farmers across the country.
          </p>
        </div>

        {/* Statistics */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATISTICS.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold">
                  {item.label}
                </h4>

                <p className="mt-4 leading-7 text-green-100">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}