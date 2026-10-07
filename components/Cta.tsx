import Link from 'next/link';
import { Audience, CTA_LABEL, ctaHref } from '@/lib/config';

type Variant = 'primary' | 'secondary' | 'ghost';

const STYLES: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark',
  secondary:
    'bg-white text-primary border border-primary hover:bg-primary-light',
  ghost:
    'bg-transparent text-ink border border-line hover:bg-white',
};

/**
 * Chamada para acao.
 *
 * O destino vem de lib/config.ts - este componente nunca escreve uma
 * URL. Alvo de toque com altura minima de 44px, como pede a orientacao
 * de acessibilidade para telas pequenas.
 */
export default function Cta({
  audience,
  variant = 'primary',
  label,
  className = '',
}: {
  audience: Audience;
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={ctaHref(audience)}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors ${STYLES[variant]} ${className}`}
    >
      {label ?? CTA_LABEL[audience]}
    </Link>
  );
}
