import { waLink } from "@/lib/site";
import { WhatsappIcon, HeadsetIcon } from "../Icons";

export function Consultation() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-teal-500/5 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="eyebrow">
                <HeadsetIcon className="h-3.5 w-3.5" />
                Бесплатная консультация
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Не знаете, что выбрать? Поможем разобраться.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-500">
                Напишите нам в WhatsApp — расскажите, что вам нужно, и мы поможем
                подобрать подходящий товар.
              </p>

              <div className="mt-7">
                <a
                  href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу получить бесплатную консультацию по подбору товара.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  Получить бесплатную консультацию
                </a>
              </div>
            </div>

            {/* Steps */}
            <ol className="grid gap-3">
              {[
                { n: "1", t: "Напишите в WhatsApp", d: "Опишите, что ищете или для кого." },
                { n: "2", t: "Получите подбор", d: "Подскажем подходящие варианты." },
                { n: "3", t: "Оформите доставку", d: "Отправим товар по Казахстану." },
              ].map((s) => (
                <li
                  key={s.n}
                  className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-glow">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{s.t}</p>
                    <p className="text-sm text-ink-500">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
