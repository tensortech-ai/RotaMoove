import Link from 'next/link';
import Cta from '@/components/Cta';
import Section from '@/components/Section';
import { CardGrid, Steps } from '@/components/Cards';
import {
  COVERAGE,
  CUSTOMER_POINTS,
  CUSTOMER_STEPS,
  HERO,
  PROVIDER_POINTS,
  SERVICE_TYPES,
} from '@/lib/content';

export default function HomePage() {
  return (
    <>
      {/* Hero: o que e, para quem, que problema resolve, o que fazer. */}
      <section className="border-b border-line bg-white">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Carretos e mudanças no estado de São Paulo
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta audience="cliente" />
              <Cta audience="prestador" variant="secondary" />
            </div>
            <p className="mt-4 text-sm text-ink-muted">{HERO.note}</p>
          </div>
        </div>
      </section>

      <Section
        title="Tipos de serviço"
        lead="Três tipos de serviço, do móvel avulso à mudança de escritório."
        tone="canvas"
      >
        <CardGrid items={SERVICE_TYPES.map((s) => ({
          title: s.name,
          description: s.description,
        }))} />
      </Section>

      <Section
        id="como-funciona"
        title="Como funciona para quem contrata"
        lead="Do pedido à avaliação, em cinco passos."
        tone="white"
      >
        <Steps items={CUSTOMER_STEPS} />
        <p className="mt-6">
          <Link
            href="/como-funciona"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver também o caminho do prestador
          </Link>
        </p>
      </Section>

      <Section
        title="Para clientes"
        lead="Um pedido só, várias propostas, e tempo para comparar."
        tone="canvas"
      >
        <CardGrid items={CUSTOMER_POINTS.slice(0, 3)} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Cta audience="cliente" />
          <Link
            href="/para-clientes"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver tudo o que o cliente pode fazer
          </Link>
        </div>
      </Section>

      <Section
        title="Para prestadores"
        lead="Receba pedidos compatíveis com a sua área e o que você faz."
        tone="white"
      >
        <CardGrid items={PROVIDER_POINTS.slice(0, 3)} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Cta audience="prestador" variant="secondary" />
          <Link
            href="/para-prestadores"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver como funciona para o prestador
          </Link>
        </div>
      </Section>

      <Section title="Cobertura" lead={COVERAGE.lead} tone="canvas">
        <div className="max-w-prose space-y-4">
          <p className="text-base leading-relaxed text-ink-muted">
            {COVERAGE.caveat}
          </p>
          <p>
            <Link
              href="/cobertura"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Mais sobre a cobertura
            </Link>
          </p>
        </div>
      </Section>

      {/* Chamada final, simples. */}
      <section className="bg-primary">
        <div className="container-page py-14 sm:py-16">
          <div className="max-w-prose">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Pronto para começar?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Descreva seu carreto ou mudança e receba orçamentos de
              prestadores que atendem a sua cidade.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta
                audience="cliente"
                variant="secondary"
                className="border-white bg-white text-primary hover:bg-primary-light"
              />
              <Cta
                audience="prestador"
                className="border border-white/60 bg-transparent text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Ainda com dúvidas?"
        lead="Reunimos as perguntas mais comuns sobre como a plataforma funciona."
        tone="white"
      >
        <p>
          <Link
            href="/perguntas-frequentes"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ler as perguntas frequentes
          </Link>
        </p>
      </Section>
    </>
  );
}
