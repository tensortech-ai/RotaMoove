/**
 * Itens de navegacao, compartilhados pelo cabecalho e pelo rodape.
 *
 * Ficam aqui, e nao no Header, porque o Header e componente de cliente:
 * o que ele exporta chega ao servidor como referencia de cliente, nao
 * como o array em si. O rodape e renderizado no servidor e precisa do
 * valor de verdade.
 */
export const NAV_LINKS = [
  { href: '/como-funciona', label: 'Como funciona' },
  { href: '/para-clientes', label: 'Para clientes' },
  { href: '/para-prestadores', label: 'Para prestadores' },
  { href: '/cobertura', label: 'Cobertura' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/perguntas-frequentes', label: 'Dúvidas' },
] as const;
