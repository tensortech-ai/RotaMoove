import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

/** Paginas publicas. /aplicativo fica de fora enquanto nao ha app na loja. */
const ROUTES = [
  { path: '', priority: 1 },
  { path: '/como-funciona', priority: 0.8 },
  { path: '/para-clientes', priority: 0.8 },
  { path: '/para-prestadores', priority: 0.8 },
  { path: '/cobertura', priority: 0.6 },
  { path: '/sobre', priority: 0.5 },
  { path: '/perguntas-frequentes', priority: 0.6 },
  { path: '/termos', priority: 0.3 },
  { path: '/privacidade', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: r.priority,
  }));
}
