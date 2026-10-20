import { Target, Eye } from "lucide-react";

import { ABOUT } from "../../constants/about";

export default function MissionVision() {
  return (
    <section className="bg-[#f8fbf6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Our Purpose
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Driven By Purpose, Guided By Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything we do is centered around delivering quality
            agricultural products while creating lasting value for
            our customers, farmers, and communities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}

          <div className="group rounded-[32px] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="inline-flex rounded-2xl bg-green-100 p-4">
              <Target
                size={32}
                className="text-green-700"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">
              {ABOUT.missionTitle}
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {ABOUT.mission}
            </p>
          </div>

          {/* Vision */}

          <div className="group rounded-[32px] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="inline-flex rounded-2xl bg-yellow-100 p-4">
              <Eye
                size={32}
                className="text-yellow-700"
              />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">
              {ABOUT.visionTitle}
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {ABOUT.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}