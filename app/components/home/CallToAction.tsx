import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import Button from "../ui/Button";
import { COMPANY } from "../../constants/company";
import { CALL_TO_ACTION } from "../../constants/callToAction";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-green-700 py-24">
      {/* Background Decoration */}

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
          {CALL_TO_ACTION.badge}
        </span>

        <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-6xl">
          {CALL_TO_ACTION.title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
          {CALL_TO_ACTION.description}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={`https://wa.me/${COMPANY.phone}`}
            className="bg-white text-green-700 hover:bg-green-100"
          >
            <MessageCircle size={20} />

            {CALL_TO_ACTION.primaryButton}
          </Button>

          <Link
            href="/products"
            className="inline-flex items-center font-semibold text-white transition hover:text-green-100"
          >
            {CALL_TO_ACTION.secondaryButton}

            <ArrowRight
              size={20}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}