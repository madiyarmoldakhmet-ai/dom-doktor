import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Тонометры, ингаляторы, глюкометры, ортопедические товары и медицинская техника для дома. Консультация и доставка по Казахстану.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dom-doktor.kz"),
  title: {
    default:
      "Дом Доктор — медицинская техника и товары для здоровья с доставкой по Казахстану",
    template: "%s · Дом Доктор",
  },
  description: DESCRIPTION,
  keywords: [
    "Дом Доктор",
    "медицинская техника",
    "тонометры",
    "ингаляторы",
    "глюкометры",
    "ортопедические товары",
    "бандажи",
    "реабилитация",
    "Талдыкорган",
    "доставка по Казахстану",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
    languages: { "ru-KZ": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "/",
    siteName: SITE.name,
    title:
      "Дом Доктор — медицинская техника и товары для здоровья с доставкой по Казахстану",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Дом Доктор — медицинская техника и товары для здоровья",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Дом Доктор — медицинская техника и товары для здоровья с доставкой по Казахстану",
    description: DESCRIPTION,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#1c66f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SITE.name,
    description: DESCRIPTION,
    image: "/og.svg",
    url: "https://dom-doktor.kz",
    telephone: `+${SITE.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Талдыкорган",
      addressCountry: "KZ",
    },
    areaServed: "KZ",
    sameAs: [SITE.instagramUrl],
  };

  return (
    <html lang="ru">
      <body className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
