import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Leaf,
} from "lucide-react";

import Button from "../../components/ui/Button";

const FEATURES = [
  "Fresh Farm Produce",
  "Nationwide Delivery",
  "Wholesale & Retail",
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f8fbf6]">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-20 lg:pt-12 lg:pb-24">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* Left */}

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <Leaf size={16} />
              Premium Agricultural Solutions
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl">
              Fresh Agricultural Products You Can Trust
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              JeyMak supplies premium grains, vegetables, seeds,
              fertilizers, and other agricultural products sourced
              from trusted farms across Nigeria.
            </p>

            <div className="mt-8 space-y-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-green-700"
                  />

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/products"
                className="group"
              >
                Browse Products

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                href="https://wa.me/2348012345678"
                className="border border-gray-300 bg-white text-gray-900 hover:border-green-700 hover:bg-green-700 hover:text-white"
              >
                Order on WhatsApp
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-sm">
              <BadgeCheck
                size={22}
                className="text-green-700"
              />

              <p className="text-sm text-gray-600">
                Trusted by farmers, homes and businesses across Nigeria.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-green-100 blur-3xl" />

            <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-yellow-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <Image
                src="/images/hero.jpg"
                alt="Farmer working on a maize farm"
                width={800}
                height={1000}
                priority
                className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold text-green-700">
                100%
              </p>

              <p className="text-sm text-gray-600">
                Fresh Farm Produce
              </p>
            </div>

            <div className="absolute right-8 top-8 rounded-2xl bg-white px-6 py-5 shadow-xl">
              <ArrowRight
                size={22}
                className="mb-2 text-green-700"
              />

              <p className="font-semibold">
                Fast Delivery
              </p>

              <p className="text-sm text-gray-600">
                Across Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}