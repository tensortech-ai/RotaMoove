import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import { BRAND, hasStoreLinks, storeLinks } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Aplicativo',
  description:
    'Situação atual da publicação do aplicativo RotaMoove e como falar '
    + 'com a equipe.',
  alternates: { canonical: '/aplicativo' },
  // Enquanto nao ha app publicado, esta pagina nao deve disputar busca.
  robots: { index: false, follow: true },
};

/**
 * Destino das chamadas para acao enquanto nao existem links de loja.
 *
 * Preferimos uma pagina honesta a um link falso ou a um botao morto: a
 * pessoa clicou esperando algo, entao ela recebe a explicacao e um
 * caminho real de contato. Quando NEXT_PUBLIC_ANDROID_URL existir, as
 * chamadas passam a ir direto para a loja e esta pagina vira apenas um
 * atalho no rodape.
 */
export default function AplicativoPage() {
  return (
    <>
      <Section
        title="O aplicativo está em fase final"
        lead={
          `O ${BRAND.name} é usado pelo aplicativo para celular. Estamos `
          + 'preparando a publicação nas lojas e ainda não há link para '
          + 'download.'
        }
        headingLevel={1}
        tone="white"
      />

      <Section title="Quer ser avisado?" tone="canvas">
        <div className="max-w-prose space-y-4 text-base leading-relaxed text-ink-muted">
          <p>
            Escreva para{' '}
            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="font-semibold text-primary hover:underline"
            >
              {BRAND.supportEmail}
            </a>{' '}
            dizendo se você quer contratar um serviço ou se cadastrar como
            prestador. Avisamos assim que a publicação sair.
          </p>

          {hasStoreLinks && (
            <ul className="space-y-2">
              {storeLinks.android && (
                <li>
                  <a
                    href={storeLinks.android}
                    className="font-semibold text-primary hover:underline"
                  >
                    Baixar para Android
                  </a>
                </li>
              )}
              {storeLinks.ios && (
                <li>
                  <a
                    href={storeLinks.ios}
                    className="font-semibold text-primary hover:underline"
                  >
                    Baixar para iPhone
                  </a>
                </li>
              )}
            </ul>
          )}

          <p>
            Enquanto isso, veja{' '}
            <Link
              href="/como-funciona"
              className="font-semibold text-primary hover:underline"
            >
              como a plataforma funciona
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
