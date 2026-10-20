import Link from "next/link";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";

import { COMPANY } from "../../constants/company";
import { NAVIGATION } from "../../constants/navigation";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0f3d1d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                <Leaf size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {COMPANY.name}
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-green-200">
                  Agriculture
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-green-100">
              {COMPANY.description}
            </p>

            <div className="mt-6 flex gap-4">
          
  <Link
   href="#"
    className="rounded-lg bg-white/10 p-3 transition hover:bg-green-600"
  >
    <Globe size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-lg bg-white/10 p-3 transition hover:bg-green-600"
  >
    <MessageCircle size={18} />
  </Link>

  <Link
    href="#"
    className="rounded-lg bg-white/10 p-3 transition hover:bg-green-600"
  >
    <Mail size={18} />
  </Link>

            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-green-100 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-green-300"
                />

                <p className="text-green-100">
                  {COMPANY.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-green-300"
                />

                <a
                  href={`tel:+${COMPANY.phone}`}
                  className="text-green-100 hover:text-white"
                >
                  +{COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-green-300"
                />

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-100 hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}

          <div>
            <h3 className="text-xl font-semibold">
              Need Help?
            </h3>

            <p className="mt-6 leading-7 text-green-100">
              Chat with us directly on WhatsApp for enquiries,
              product availability, and orders.
            </p>

            <Link
              href={`https://wa.me/${COMPANY.phone}`}
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-green-200">
          © {CURRENT_YEAR} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}