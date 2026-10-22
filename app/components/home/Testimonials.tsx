import { Star } from "lucide-react";

import { TESTIMONIALS } from "../../constants/testimonials";

const featured = TESTIMONIALS.find(
  (testimonial) => testimonial.featured
);

const others = TESTIMONIALS.filter(
  (testimonial) => !testimonial.featured
);

export default function Testimonials() {
  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Trusted By Customers Across Nigeria
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're proud to serve households, retailers, restaurants,
            and farmers with quality agricultural products and
            dependable service.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Featured */}

          {featured && (
            <div className="rounded-3xl bg-white p-10 shadow-lg">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: featured.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={22}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  4.9/5 Rating
                </span>
              </div>

              <blockquote className="text-2xl font-medium leading-10 text-gray-800">
                "{featured.message}"
              </blockquote>

              <div className="mt-10">
                <h4 className="text-xl font-bold text-gray-900">
                  {featured.name}
                </h4>

                <p className="text-gray-600">
                  {featured.role} • {featured.location}
                </p>
              </div>
            </div>
          )}

          {/* Other Testimonials */}

          <div className="space-y-8">
            {others.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="leading-7 text-gray-600">
                  "{item.message}"
                </p>

                <div className="mt-6">
                  <h4 className="font-bold">{item.name}</h4>

                  <p className="text-sm text-gray-500">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}