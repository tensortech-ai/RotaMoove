/**
 * Bloco padrao de conteudo.
 *
 * Recebe o nivel do titulo em vez de fixar <h2>: a hierarquia de
 * cabecalhos precisa fazer sentido em cada pagina, e nao ser um efeito
 * colateral do componente.
 */
export default function Section({
  id,
  title,
  lead,
  headingLevel = 2,
  tone = 'canvas',
  children,
}: {
  id?: string;
  title?: string;
  lead?: string;
  /** 1 na secao de abertura da pagina; 2 nas demais. */
  headingLevel?: 1 | 2 | 3;
  tone?: 'canvas' | 'white' | 'primary';
  children?: React.ReactNode;
}) {
  const Heading = `h${headingLevel}` as 'h1' | 'h2' | 'h3';
  const headingSize =
    headingLevel === 1
      ? 'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'
      : 'text-2xl font-bold tracking-tight sm:text-3xl';

  const background =
    tone === 'white'
      ? 'bg-white'
      : tone === 'primary'
        ? 'bg-primary-light'
        : 'bg-canvas';

  return (
    <section id={id} className={`${background} py-14 sm:py-20`}>
      <div className="container-page">
        {title && (
          <div className="max-w-prose">
            <Heading className={headingSize}>{title}</Heading>
            {lead && (
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {lead}
              </p>
            )}
          </div>
        )}
        {children && <div className={title ? 'mt-10' : ''}>{children}</div>}
      </div>
    </section>
  );
}
