export const SITE = {
  name: "Дом Доктор",
  tagline: "Медицинская техника и товары для здоровья",
  region: "Талдыкорган, Казахстан",
  whatsappNumber: "77084272414",
  whatsappDisplay: "+7 708 427 24 14",
  instagramHandle: "dom_doktor_tdk",
  instagramUrl: "https://instagram.com/dom_doktor_tdk",
} as const;

export const WHATSAPP_BASE = `https://wa.me/${SITE.whatsappNumber}`;

/** Build a WhatsApp link with an optional pre-filled message. */
export function waLink(message?: string): string {
  if (!message) return WHATSAPP_BASE;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
