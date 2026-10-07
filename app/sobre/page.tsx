import type { Metadata } from 'next';
import Section from '@/components/Section';
import { ABOUT } from '@/lib/content';
import { BRAND } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Por que o RotaMoove existe: organizar a contratação de carretos e '
    + 'mudanças, com condições claras antes de fechar.',
  alternates: { canonical: '/sobre' },
};

export default function SobrePage() {
  return (
    <>
      <Section
        title={`Sobre o ${BRAND.name}`}
        lead="Uma forma mais organizada de contratar carreto e mudança."
        headingLevel={1}
        tone="white"
      />

      <Section title="O problema" tone="canvas">
        <p className="max-w-prose text-base leading-relaxed text-ink-muted">
          {ABOUT.problem}
        </p>
      </Section>

      <Section title="O que a plataforma faz" tone="white">
        <p className="max-w-prose text-base leading-relaxed text-ink-muted">
          {ABOUT.purpose}
        </p>
      </Section>

      <Section title="O objetivo" tone="canvas">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>{ABOUT.goal}</p>
        </div>
      </Section>
    </>
  );
}
