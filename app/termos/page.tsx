import type { Metadata } from 'next';
import Section from '@/components/Section';
import { BRAND } from '@/lib/config';
import { TERMS_SECTIONS, TERMS_UPDATED } from '@/lib/terms';

export const metadata: Metadata = {
  title: 'Termos de uso',
  description:
    'Condições de uso da plataforma RotaMoove: o que a plataforma faz, '
    + 'de quem é a responsabilidade pelo serviço de transporte, preço e '
    + 'cancelamento.',
  alternates: { canonical: '/termos' },
};

/** Data no formato brasileiro, sem depender do fuso de quem le. */
function dataBr(iso: string): string {
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

export default function TermosPage() {
  return (
    <>
      <Section
        title="Termos de uso"
        lead={
          `Condições de uso da plataforma ${BRAND.name}. A RotaMoove `
          + 'intermedia a contratação: quem executa o transporte é o '
          + 'transportador parceiro que você escolher.'
        }
        headingLevel={1}
        tone="white"
      >
        <p className="text-sm text-ink-muted">
          Última revisão: {dataBr(TERMS_UPDATED)}
        </p>
      </Section>

      {TERMS_SECTIONS.map((secao, i) => (
        <Section
          key={secao.id}
          id={secao.id}
          title={secao.title}
          tone={i % 2 === 0 ? 'canvas' : 'white'}
        >
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
            {secao.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}

            {secao.items && (
              <ul className="list-disc space-y-2 pl-5">
                {secao.items.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            )}

            {secao.subsections?.map((sub) => (
              <div key={sub.title} className="space-y-3 pt-4">
                <h3 className="text-base font-semibold text-ink">
                  {sub.title}
                </h3>
                {sub.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {sub.items && (
                  <ul className="list-disc space-y-2 pl-5">
                    {sub.items.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
