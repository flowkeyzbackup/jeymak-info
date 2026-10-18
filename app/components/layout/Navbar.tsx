import Link from "next/link";
import { NAVIGATION } from "../../constants/navigation"
import { COMPANY } from "../../constants/company";
import Button from "../../components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          {COMPANY.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-green-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button
          href={`https://wa.me/${COMPANY.phone}`}
          className="hidden md:flex"
        >
          WhatsApp
        </Button>
      </div>
    </header>
  );
}