import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { COVERAGE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Cobertura',
  description:
    'O RotaMoove começa pelo estado de São Paulo. Veja como funciona a '
    + 'disponibilidade de prestadores por cidade.',
  alternates: { canonical: '/cobertura' },
};

export default function CoberturaPage() {
  return (
    <>
      <Section
        title={COVERAGE.title}
        lead={COVERAGE.lead}
        headingLevel={1}
        tone="white"
      />

      <Section title="Como a disponibilidade funciona" tone="canvas">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>{COVERAGE.caveat}</p>
          <p>
            Cada prestador escolhe as cidades em que atua. Uma solicitação
            só chega a quem marcou aquela cidade e realiza aquele tipo de
            serviço. É por isso que a quantidade de orçamentos varia de
            região para região.
          </p>
        </div>
      </Section>

      <Section title="E os outros estados?" tone="white">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>{COVERAGE.future}</p>
        </div>
        <div className="mt-8">
          <Cta audience="cliente" />
        </div>
      </Section>
    </>
  );
}
