import {
  Award,
  HeartHandshake,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { ABOUT } from "../../constants/about";

const ICONS = [
  Award,
  ShieldCheck,
  Leaf,
  HeartHandshake,
];

export default function CoreValues() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Our Core Values
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            The Principles That Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our values shape the way we serve our customers,
            support farmers, and contribute to Nigeria's
            agricultural growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ABOUT.values.map((value, index) => {
            const Icon = ICONS[index];

            return (
              <div
                key={value.title}
                className="group rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-green-100 p-4 transition-colors duration-300 group-hover:bg-green-700">
                  <Icon
                    size={30}
                    className="text-green-700 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}