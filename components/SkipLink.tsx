/**
 * Primeiro elemento focavel da pagina: leva direto ao conteudo,
 * pulando a navegacao. Invisivel ate receber foco pelo teclado.
 */
export default function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Pular para o conteúdo
    </a>
  );
}
