import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { CardGrid, Steps } from '@/components/Cards';
import { CUSTOMER_POINTS, CUSTOMER_STEPS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Para clientes',
  description:
    'Solicite seu carreto ou mudança, receba orçamentos de prestadores '
    + 'da sua região, compare e contrate pelo aplicativo.',
  alternates: { canonical: '/para-clientes' },
};

export default function ParaClientesPage() {
  return (
    <>
      <Section
        title="Para clientes"
        lead="Um pedido só, várias propostas, e tempo para comparar antes de decidir."
        headingLevel={1}
        tone="white"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Cta audience="cliente" />
        </div>
      </Section>

      <Section title="O que você pode fazer" tone="canvas">
        <CardGrid items={CUSTOMER_POINTS} />
      </Section>

      <Section
        title="Passo a passo"
        lead="Do pedido à avaliação do prestador."
        tone="white"
      >
        <Steps items={CUSTOMER_STEPS} />
      </Section>

      <Section title="O que a plataforma não faz" tone="canvas">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>
            O pagamento não é processado pela plataforma. O valor combinado
            fica registrado no serviço, mas o acerto é feito diretamente
            entre você e o prestador.
          </p>
          <p>
            Não há rastreamento por GPS nem mapa ao vivo. O acompanhamento
            é feito pelas etapas que o prestador atualiza: agendado, a
            caminho, em serviço e concluído.
          </p>
          <p>
            Ainda não há notificações push. As novidades aparecem quando
            você abre o aplicativo.
          </p>
        </div>
      </Section>
    </>
  );
}
