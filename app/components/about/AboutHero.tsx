import Image from "next/image";
import { Leaf } from "lucide-react";

import { ABOUT } from "../../constants/about";

export default function AboutHero() {
  return (
    <section className="bg-[#f8fbf6]">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <Leaf size={16} />

            {ABOUT.badge}
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900">
            {ABOUT.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {ABOUT.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] shadow-2xl">
          <Image
            src="/images/about-hero.jpg"
            alt="About JeyMak"
            width={900}
            height={700}
            className="h-[550px] w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}