type Item = {
  readonly title: string;
  readonly description: string;
};

/** Lista de cartoes simples. Sem ilustracao, sem decoracao. */
export function CardGrid({
  items,
  columns = 3,
}: {
  items: readonly Item[];
  columns?: 2 | 3;
}) {
  const cols =
    columns === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <ul className={`grid gap-4 ${cols}`}>
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-card border border-line bg-white p-6"
        >
          <h3 className="text-base font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * Sequencia numerada de etapas.
 *
 * E uma <ol> de verdade: a ordem e informacao, nao estilo, entao ela
 * precisa chegar assim para quem usa leitor de tela.
 */
export function Steps({ items }: { items: readonly Item[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="flex h-full flex-col rounded-card border border-line bg-white p-5"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full bg-primary-light text-sm font-bold text-primary"
          >
            {index + 1}
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
