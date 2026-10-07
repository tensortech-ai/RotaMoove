import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { FAQ } from '@/lib/content';
import { BRAND } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Perguntas frequentes',
  description:
    'Como solicitar um serviço, como comparar orçamentos, como funciona '
    + 'a avaliação e o que a plataforma ainda não faz.',
  alternates: { canonical: '/perguntas-frequentes' },
};

export default function FaqPage() {
  return (
    <>
      <Section
        title="Perguntas frequentes"
        lead="O que a plataforma faz, como faz, e o que ainda não faz."
        headingLevel={1}
        tone="white"
      />

      <Section tone="canvas">
        <h2 className="sr-only">Lista de perguntas</h2>
        {/* <details> nativo: abre e fecha pelo teclado, sem JavaScript. */}
        <ul className="mx-auto max-w-prose space-y-3">
          {FAQ.map((item) => (
            <li key={item.question}>
              <details className="group rounded-card border border-line bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-card px-5 py-4 text-base font-semibold text-ink">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-ink-subtle transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Não encontrou sua dúvida?" tone="white">
        <div className="max-w-prose space-y-4">
          <p className="text-base leading-relaxed text-ink-muted">
            Escreva para{' '}
            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="font-semibold text-primary hover:underline"
            >
              {BRAND.supportEmail}
            </a>
            .
          </p>
          <Cta audience="cliente" />
        </div>
      </Section>
    </>
  );
}
