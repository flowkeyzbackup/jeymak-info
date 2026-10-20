import {
  BadgeCheck,
  Handshake,
  Truck,
  Wheat,
} from "lucide-react";

import { ABOUT } from "../../constants/about";

const ICONS = [
  Wheat,
  Handshake,
  Truck,
  BadgeCheck,
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8fbf6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Why Choose JeyMak
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            A Reliable Partner For Your Agricultural Needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At JeyMak, we're committed to providing quality products,
            dependable service, and trusted partnerships that help our
            customers succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {ABOUT.whyChooseUs.map((item, index) => {
            const Icon = ICONS[index];

            return (
              <div
                key={item.title}
                className="flex gap-5 rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    size={30}
                    className="text-green-700"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}