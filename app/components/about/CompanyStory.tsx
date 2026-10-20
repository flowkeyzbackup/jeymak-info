import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { ABOUT } from "../../constants/about";

export default function CompanyStory() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}

        <div className="relative">
          <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-green-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src="/images/farm-team.jpg"
              alt="JeyMak Team"
              width={800}
              height={700}
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right */}

        <div>
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            {ABOUT.storyTitle}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Delivering Quality Agriculture With Integrity
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {ABOUT.story}
          </p>

          <div className="mt-10 space-y-4">
            {ABOUT.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="mt-1 text-green-700"
                  size={20}
                />

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}