"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsappIcon } from "./Icons";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Здравствуйте! Пишу с сайта «Дом Доктор» — хочу получить консультацию.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-white shadow-[0_16px_40px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:bg-[#1fb855] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75" />
        <WhatsappIcon className="relative h-5 w-5" />
      </span>
      <span className="hidden text-sm sm:inline">Написать</span>
    </a>
  );
}
