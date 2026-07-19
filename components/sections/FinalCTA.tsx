import { waLink } from "@/lib/site";
import { WhatsappIcon, HeartPulseIcon } from "../Icons";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-teal-500/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm">
              <HeartPulseIcon className="h-7 w-7" />
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Здоровье начинается с правильного выбора.
            </h2>
            <p className="mt-4 text-lg text-brand-50/90">
              Получите консультацию и подберите подходящий товар для дома.
            </p>

            <div className="mt-8">
              <a
                href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу получить консультацию и подобрать товар.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex bg-white px-7 py-4 text-base font-bold text-brand-700 shadow-lg transition-all duration-200 hover:bg-brand-50 active:scale-[0.98]"
              >
                <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
