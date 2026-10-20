import { ArrowRight, MessageCircle } from "lucide-react";

import Button from "../../components/ui/Button";

export default function AboutCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-800 via-green-700 to-green-600 px-8 py-16 text-center text-white shadow-2xl lg:px-20">
          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              Let's Grow Together
            </span>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">
              Ready to Order Fresh Agricultural Products?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Whether you're buying for your home, business, or farm,
              JeyMak is ready to supply quality agricultural products
              you can trust.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="/products"
                className="group bg-white text-green-800 hover:bg-green-100"
              >
                Browse Products

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <Button
                href="https://wa.me/2348012345678"
                className="border border-white/30 bg-transparent text-white hover:bg-white hover:text-green-800"
              >
                <MessageCircle
                  size={18}
                  className="mr-2"
                />

                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}