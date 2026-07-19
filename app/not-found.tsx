import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-extrabold tracking-tight text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
        Страница не найдена
      </h1>
      <p className="mt-3 max-w-md text-ink-500">
        Возможно, страница была перемещена или удалена. Вернитесь на главную,
        чтобы посмотреть ассортимент.
      </p>
      <Link href="/" className="btn-primary mt-7">
        На главную
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
