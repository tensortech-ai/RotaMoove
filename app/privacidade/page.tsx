import type { Metadata } from 'next';
import Section from '@/components/Section';
import { BRAND } from '@/lib/config';
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from '@/lib/privacy';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description:
    'Quais dados o RotaMoove coleta, para que usa, com quem compartilha '
    + 'e como exercer seus direitos.',
  alternates: { canonical: '/privacidade' },
};

/** Data no formato brasileiro, sem depender do fuso de quem le. */
function dataBr(iso: string): string {
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

export default function PrivacidadePage() {
  return (
    <>
      <Section
        title="Política de privacidade"
        lead={
          `Como o ${BRAND.name} trata os seus dados pessoais. `
          + 'Escrita para ser lida, não para ser assinada sem entender.'
        }
        headingLevel={1}
        tone="white"
      >
        <p className="text-sm text-ink-muted">
          Última revisão: {dataBr(PRIVACY_UPDATED)}
        </p>
      </Section>

      {PRIVACY_SECTIONS.map((secao, i) => (
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

            {secao.closing && <p>{secao.closing}</p>}
          </div>
        </Section>
      ))}
    </>
  );
}
