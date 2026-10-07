import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { CardGrid, Steps } from '@/components/Cards';
import { PROVIDER_POINTS, PROVIDER_STEPS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Para prestadores',
  description:
    'Cadastre sua empresa, defina as cidades que atende e receba '
    + 'solicitações compatíveis com o seu serviço.',
  alternates: { canonical: '/para-prestadores' },
};

export default function ParaPrestadoresPage() {
  return (
    <>
      <Section
        title="Para prestadores"
        lead="Receba pedidos das cidades que você atende, sem disputar espaço em anúncio."
        headingLevel={1}
        tone="white"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Cta audience="prestador" />
        </div>
      </Section>

      <Section title="Como funciona para você" tone="canvas">
        <CardGrid items={PROVIDER_POINTS} columns={2} />
      </Section>

      <Section
        title="Passo a passo"
        lead="Do cadastro à conclusão do serviço."
        tone="white"
      >
        <Steps items={PROVIDER_STEPS} />
      </Section>

      <Section title="Antes de começar" tone="canvas">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>
            O cadastro passa por uma conferência antes de começar a receber
            solicitações. Enquanto isso, o aplicativo avisa que o cadastro
            está em análise.
          </p>
          <p>
            O volume de pedidos depende da demanda nas cidades que você
            cadastrou. Em regiões com menos movimento, chegam menos
            solicitações — não prometemos um número de pedidos.
          </p>
          <p>
            Nesta fase inicial não há cobrança de comissão nem mensalidade
            para enviar orçamentos.
          </p>
        </div>
      </Section>
    </>
  );
}
