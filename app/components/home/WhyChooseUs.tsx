import { WHY_CHOOSE_US } from "../../constants/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Why Choose JeyMak
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Your Trusted Agricultural Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine quality products, dependable service, and trusted
            partnerships to deliver the best agricultural solutions across
            Nigeria.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                  <Icon
                    size={30}
                    className="text-green-700 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
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