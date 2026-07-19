import type { ComponentType, SVGProps } from "react";
import {
  ShieldCheckIcon,
  HeadsetIcon,
  TruckIcon,
  StarIcon,
} from "../Icons";

type Benefit = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheckIcon,
    title: "Гарантия и качество",
    description: "Подбираем проверенные товары для здоровья.",
  },
  {
    icon: HeadsetIcon,
    title: "Бесплатная консультация",
    description: "Поможем выбрать подходящее решение под вашу ситуацию.",
  },
  {
    icon: TruckIcon,
    title: "Доставка по Казахстану",
    description: "Отправляем товары клиентам по всей Республике Казахстан.",
  },
  {
    icon: StarIcon,
    title: "Нам доверяют",
    description:
      "Магазин специализируется на медицинской технике, ортопедии и товарах для реабилитации.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
            Почему «Дом Доктор»
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Доверие, проверенные товары и поддержка
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Мы помогаем подобрать медицинскую технику и товары для здоровья,
            которыми пользуешься с уверенностью.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
