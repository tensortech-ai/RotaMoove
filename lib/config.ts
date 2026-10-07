/**
 * Configuracao do site institucional.
 *
 * Os destinos das chamadas para acao ficam TODOS aqui. Nenhum componente
 * escreve URL de loja ou de aplicativo: eles pedem o destino a este
 * modulo. Quando as lojas estiverem publicadas, basta preencher as
 * variaveis de ambiente - nenhum componente muda.
 */

/** Identidade da marca, espelhada em lib/core/config/brand_config.dart. */
export const BRAND = {
  name: 'RotaMoove',
  /**
   * Razao social como consta no CNPJ. "RotaMoove" e o nome da
   * plataforma; quem responde legalmente e a ESS.
   */
  legalName: 'ESS Serviços de Transportes de Cargas e Mudanças em Geral',
  legalNameShort: 'ESS Serviços de Transportes',
  tagline: 'Conectando clientes a profissionais de transporte',
  supportEmail: 'contato@rotamoove.com.br',
  supportPhone: '(11) 98233-1118',
  /** WhatsApp oficial. O E.164 e o que wa.me exige. */
  whatsapp: '(11) 94979-2390',
  whatsappE164: '5511949792390',
  /**
   * CNPJ na mascara oficial da Receita Federal: os quatro digitos do
   * estabelecimento vem depois de uma BARRA, nao de um ponto. O cliente
   * informou "30.590.568.0001-70"; os digitos sao os mesmos e conferem
   * no calculo dos verificadores - so a pontuacao foi corrigida.
   */
  cnpj: '30.590.568/0001-70',
  address: {
    street: 'Rua Berco Udler, 25',
    postalCode: '05767-330',
    city: 'São Paulo',
    state: 'SP',
  },
} as const;

/** Link direto de conversa no WhatsApp. */
export const whatsappUrl = `https://wa.me/${BRAND.whatsappE164}`;

/** Redes sociais, na ordem em que aparecem no rodape. */
export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rotamoove',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/RotaMoove/61594587992186/',
  },
] as const;

/** Endereco em uma linha, como aparece no rodape. */
export const addressLine = [
  BRAND.address.street,
  `CEP ${BRAND.address.postalCode}`,
  `${BRAND.address.city}/${BRAND.address.state}`,
].join(' — ');

/**
 * URL publica do site. Usada em canonical, Open Graph e sitemap.
 * Sem barra no final.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rotamoove.com.br'
).replace(/\/$/, '');

/**
 * Links das lojas. Enquanto vazios, as chamadas para acao apontam para
 * a pagina interna /aplicativo, que explica com honestidade em que pe
 * esta a publicacao. Nao inventamos link de loja.
 */
const STORE = {
  android: process.env.NEXT_PUBLIC_ANDROID_URL ?? '',
  ios: process.env.NEXT_PUBLIC_IOS_URL ?? '',
} as const;

export const hasStoreLinks = Boolean(STORE.android || STORE.ios);

export const storeLinks = STORE;

/**
 * Publico de cada chamada para acao. O aplicativo e um so; o parametro
 * serve para o site lembrar de qual jornada a pessoa veio quando os
 * links de loja existirem.
 */
export type Audience = 'cliente' | 'prestador';

/**
 * Destino de uma chamada para acao.
 *
 * Hoje devolve sempre a pagina interna. Assim que NEXT_PUBLIC_ANDROID_URL
 * (ou IOS) for definida, devolve a loja - sem tocar em componente algum.
 */
export function ctaHref(audience: Audience): string {
  if (!hasStoreLinks) return `/aplicativo?perfil=${audience}`;
  return STORE.android || STORE.ios;
}

/** Rotulo padrao de cada chamada para acao. */
export const CTA_LABEL: Record<Audience, string> = {
  cliente: 'Solicitar serviço',
  prestador: 'Quero ser prestador',
};

/**
 * Ponto de integracao para analytics.
 *
 * Nao ha rastreamento algum instalado e nenhum script de terceiros e
 * carregado. Esta funcao existe para que, quando houver uma decisao
 * sobre analytics, exista um unico lugar para ligar - e para que
 * nenhum componente chame biblioteca de terceiros diretamente.
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function trackEvent(name: string, data?: Record<string, unknown>): void {
  // Intencionalmente vazio: ha um lugar para ligar analytics, mas nada
  // e enviado hoje. Ver o README do site.
}
/* eslint-enable @typescript-eslint/no-unused-vars */
