import Link from "next/link";
import { Logo } from "./Logo";
import {
  WhatsappIcon,
  InstagramIcon,
  PhoneIcon,
  MapPinIcon,
} from "./Icons";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="border-t border-slate-100 bg-ink-900 text-slate-300">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="[&_span]:text-white [&_.text-brand-600]:text-brand-400">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Медицинская техника, ортопедия и товары для реабилитации.
              Поможем подобрать проверенные товары для здоровья и доставим по всему Казахстану.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPinIcon className="h-4 w-4 text-brand-400" />
              {SITE.region}
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор».")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-[#25D366]"
                >
                  <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 text-brand-400" />
                  @{SITE.instagramHandle}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-slate-300">
                <PhoneIcon className="h-4 w-4 text-brand-400" />
                {SITE.whatsappDisplay}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Документы
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-300 transition-colors hover:text-white">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 transition-colors hover:text-white">
                  Пользовательское соглашение
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} {SITE.name}. Все права защищены.</p>
          <p>Талдыкорган · Доставка по Казахстану 🇰🇿</p>
        </div>
      </div>
    </footer>
  );
}
