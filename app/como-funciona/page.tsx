import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { Steps } from '@/components/Cards';
import { CUSTOMER_STEPS, PROVIDER_STEPS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Como funciona',
  description:
    'O caminho do cliente, do pedido à avaliação, e o caminho do '
    + 'prestador, do cadastro à realização do serviço.',
  alternates: { canonical: '/como-funciona' },
};

export default function ComoFuncionaPage() {
  return (
    <>
      <Section
        title="Como funciona"
        lead="Dois caminhos, um serviço. Veja o que acontece de cada lado."
        headingLevel={1}
        tone="white"
      />

      <Section
        title="Para quem contrata"
        lead="Você descreve o serviço uma vez e recebe propostas de quem atende a sua região."
        tone="canvas"
      >
        <Steps items={CUSTOMER_STEPS} />
        <div className="mt-8">
          <Cta audience="cliente" />
        </div>
      </Section>

      <Section
        title="Para quem presta o serviço"
        lead="Você define onde atende e recebe apenas os pedidos compatíveis."
        tone="white"
      >
        <Steps items={PROVIDER_STEPS} />
        <div className="mt-8">
          <Cta audience="prestador" variant="secondary" />
        </div>
      </Section>
    </>
  );
}
