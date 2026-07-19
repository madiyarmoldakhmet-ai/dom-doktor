import { waLink } from "@/lib/site";
import {
  WhatsappIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  TruckIcon,
  HeartPulseIcon,
} from "../Icons";

const TRUST = [
  { icon: ShieldCheckIcon, label: "Гарантия и качество" },
  { icon: TruckIcon, label: "Доставка по Казахстану" },
  { icon: HeartPulseIcon, label: "Рекомендуют врачи" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Медтехника для здоровья · {`Талдыкорган`}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Медицинская техника и товары для здоровья —{" "}
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              с доставкой по Казахстану
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
            Поможем подобрать тонометр, ингалятор, глюкометр, ортопедические
            товары и другую медицинскую технику для дома.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу получить консультацию по медицинским товарам.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <WhatsappIcon className="h-5 w-5" />
              Получить консультацию в WhatsApp
            </a>
            <a href="#categories" className="btn-ghost text-base">
              Посмотреть товары
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Trust strip */}
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                <Icon className="h-5 w-5 text-brand-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: visual card */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <HeroVisual />
        </div>
      </div>

      <a
        href="#categories"
        aria-label="Прокрутить к категориям"
        className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-ink-500 shadow-sm transition-colors hover:text-brand-600"
      >
        <ChevronDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Main card */}
      <div className="relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow">
              <HeartPulseIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">Дом Доктор</p>
              <p className="text-xs text-ink-500">Подбор и доставка медтехники</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            Онлайн
          </span>
        </div>

        {/* Mock chat */}
        <div className="mt-5 space-y-2.5">
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-600 px-3.5 py-2 text-sm text-white shadow-sm">
            Здравствуйте! Нужен тонометр для пожилого человека 🙏
          </div>
          <div className="mr-auto w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-sm text-ink-700">
            Приветствуем! 🩺 Подберём автоматический тонометр с большой манжетой и доставкой по Казахстану.
          </div>
          <div className="mr-auto flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2 text-sm text-ink-700">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-5 -top-5 hidden animate-float rounded-2xl border border-slate-100 bg-white p-3 shadow-card sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500/10 text-teal-600">
            <TruckIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-ink-900">Доставка 🇰🇿</p>
            <p className="text-[11px] text-ink-500">по всему Казахстану</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-4 hidden animate-float [animation-delay:1.5s] rounded-2xl border border-slate-100 bg-white p-3 shadow-card sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheckIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-ink-900">Гарантия</p>
            <p className="text-[11px] text-ink-500">проверенные товары</p>
          </div>
        </div>
      </div>
    </div>
  );
}
