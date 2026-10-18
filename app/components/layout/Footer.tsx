import { COMPANY } from "../../constants/company";

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center text-sm text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>

        <p>{COMPANY.address}</p>
      </div>
    </footer>
  );
}