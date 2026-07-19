import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsappIcon } from "./Icons";
import { waLink } from "@/lib/site";

const NAV = [
  { label: "Товары", href: "/#categories" },
  { label: "Преимущества", href: "/#benefits" },
  { label: "Доставка", href: "/#delivery" },
  { label: "Контакты", href: "/#contacts" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу получить консультацию.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-4 py-2.5 text-sm"
        >
          <WhatsappIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
