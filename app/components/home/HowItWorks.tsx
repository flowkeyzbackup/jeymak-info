import { HOW_IT_WORKS } from "../../constants/howitworks";

export default function HowItWorks() {
  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Ordering Fresh Farm Produce Is Simple
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've made the ordering process straightforward so you can
            get quality agricultural products without any hassle.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-8 top-8 text-5xl font-bold text-green-100">
                  {step.id}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    size={28}
                    className="text-green-700"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}