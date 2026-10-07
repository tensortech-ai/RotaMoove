'use client';

import { useEffect } from 'react';

/**
 * Limite de erro do App Router.
 *
 * Nao mostramos a mensagem tecnica para quem visita: ela vai para o
 * console, e a pessoa recebe um texto util e uma forma de sair da tela.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-prose">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Algo deu errado
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Não foi possível carregar esta página. Tente novamente em
            instantes.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
