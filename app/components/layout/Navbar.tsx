"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MessageCircle,
  Leaf
} from "lucide-react";


import Button from "../../components/ui/Button";
import { COMPANY } from "../../constants/company";
import { NAVIGATION } from "../../constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <Link
  href="/"
  className="flex items-center gap-3"
>
  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
    <Leaf
      size={22}
      className="text-green-700"
    />
  </div>

  <div className="flex flex-col">
    <span className="text-xl font-extrabold tracking-tight text-green-800">
      {COMPANY.name}
    </span>

    <span className="-mt-1 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
      Agriculture
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-medium text-gray-700 transition duration-300 hover:text-green-700 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}

          <div className="hidden lg:block">
            <Button href={`https://wa.me/${COMPANY.phone}`}>
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b px-6">
         <Link
  href="/"
  onClick={() => setIsOpen(false)}
  className="flex items-center gap-3"
>
  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
    <Leaf
      size={22}
      className="text-green-700"
    />
  </div>

  <div className="flex flex-col">
    <span className="text-xl font-extrabold tracking-tight text-green-800">
      {COMPANY.name}
    </span>

    <span className="-mt-1 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
      Agriculture
    </span>
  </div>
</Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-6 py-10">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 pb-4 text-xl font-semibold text-gray-800 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="px-6">
          <Button
            href={`https://wa.me/${COMPANY.phone}`}
            className="flex w-full items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}