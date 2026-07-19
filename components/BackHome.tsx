import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export function BackHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
    >
      <ArrowRightIcon className="h-4 w-4 rotate-180" />
      На главную
    </Link>
  );
}
