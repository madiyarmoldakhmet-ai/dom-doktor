import { waLink } from "@/lib/site";
import { TruckIcon, WhatsappIcon, MapPinIcon } from "../Icons";

const REGIONS = [
  "Алматы и Алматинская область",
  "Астана",
  "Шымкент",
  "Талдыкорган",
  "Караганда",
  "Актобе",
  "Атырау",
  "и другие города Казахстана",
];

export function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <TruckIcon className="h-3.5 w-3.5" />
              Доставка
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Доставка по Казахстану 🇰🇿
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-500">
              Закажите необходимую медицинскую технику и товары для здоровья с
              доставкой по Казахстану. Уточните наличие и условия доставки в WhatsApp.
            </p>

            <div className="mt-7">
              <a
                href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу уточнить наличие и условия доставки.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <WhatsappIcon className="h-5 w-5" />
                Уточнить доставку
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-7 shadow-card sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <MapPinIcon className="h-6 w-6" />
              </span>
              <p className="text-base font-bold text-ink-900">
                География отправок
              </p>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {REGIONS.map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-ink-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {r}
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
              Условия и сроки доставки зависят от населённого пункта — уточняйте детали в WhatsApp перед заказом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
