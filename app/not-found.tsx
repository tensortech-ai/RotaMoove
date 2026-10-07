import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Erro 404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            O endereço que você abriu não existe ou foi movido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark"
            >
              Voltar ao início
            </Link>
            <Link
              href="/perguntas-frequentes"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-base font-semibold text-ink hover:bg-canvas"
            >
              Perguntas frequentes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
