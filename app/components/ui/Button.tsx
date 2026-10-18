import Link from "next/link";
import { cn } from "../../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}