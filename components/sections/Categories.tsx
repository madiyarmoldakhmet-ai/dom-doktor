import type { ComponentType, SVGProps } from "react";
import { waLink } from "@/lib/site";
import {
  HeartPulseIcon,
  DropletIcon,
  WindIcon,
  ActivityIcon,
  BoneIcon,
  HomeIcon,
  AccessibilityIcon,
  WhatsappIcon,
} from "../Icons";

type Category = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradient: string;
};

const CATEGORIES: Category[] = [
  {
    icon: HeartPulseIcon,
    title: "Тонометры",
    description: "Для контроля артериального давления дома.",
    gradient: "from-rose-500/15 to-rose-500/0 text-rose-600",
  },
  {
    icon: WindIcon,
    title: "Ингаляторы",
    description: "Для домашней терапии и дыхательной поддержки.",
    gradient: "from-sky-500/15 to-sky-500/0 text-sky-600",
  },
  {
    icon: DropletIcon,
    title: "Глюкометры",
    description: "Для регулярного контроля уровня сахара.",
    gradient: "from-violet-500/15 to-violet-500/0 text-violet-600",
  },
  {
    icon: BoneIcon,
    title: "Бандажи и ортопедия",
    description: "Для поддержки, восстановления и реабилитации.",
    gradient: "from-amber-500/15 to-amber-500/0 text-amber-600",
  },
  {
    icon: HomeIcon,
    title: "Медтехника для дома",
    description: "Полезные устройства для ежедневного контроля здоровья.",
    gradient: "from-brand-500/15 to-brand-500/0 text-brand-600",
  },
  {
    icon: AccessibilityIcon,
    title: "Реабилитационные товары",
    description: "Товары для восстановления и комфортной жизни.",
    gradient: "from-teal-500/15 to-teal-500/0 text-teal-600",
  },
];

export function Categories() {
  return (
    <section id="categories" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ассортимент</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Категории товаров для здоровья
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Подскажем, что подойдёт именно вам, и подберём проверенную медицинскую
            технику для дома. Уточните наличие и подробности в WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, description, gradient }) => {
            const msg = `Здравствуйте! Пишу с сайта «Дом Доктор» — интересует категория «${title}». Подберите, пожалуйста, подходящий вариант.`;
            return (
              <article
                key={title}
                className="card group flex flex-col hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${gradient} ring-1 ring-inset ring-black/5 transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {description}
                </p>

                <a
                  href={waLink(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                  Узнать подробнее в WhatsApp
                </a>
              </article>
            );
          })}
        </div>

        {/* Auxiliary note */}
        <p className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-center text-sm text-ink-500">
          <ActivityIcon className="h-4 w-4 shrink-0 text-brand-600" />
          Также в наличии аптечные товары. Не нашли нужное — напишите, поможем подобрать.
        </p>
      </div>
    </section>
  );
}
