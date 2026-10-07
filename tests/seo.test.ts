import { describe, expect, it } from 'vitest';
import { metadata as raiz } from '@/app/layout';
import { metadata as comoFunciona } from '@/app/como-funciona/page';
import { metadata as paraClientes } from '@/app/para-clientes/page';
import { metadata as paraPrestadores } from '@/app/para-prestadores/page';
import { metadata as cobertura } from '@/app/cobertura/page';
import { metadata as sobre } from '@/app/sobre/page';
import { metadata as faq } from '@/app/perguntas-frequentes/page';
import { metadata as aplicativo } from '@/app/aplicativo/page';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { SITE_URL } from '@/lib/config';

const PAGINAS = [
  ['/como-funciona', comoFunciona],
  ['/para-clientes', paraClientes],
  ['/para-prestadores', paraPrestadores],
  ['/cobertura', cobertura],
  ['/sobre', sobre],
  ['/perguntas-frequentes', faq],
] as const;

describe('SEO', () => {
  it('o layout define titulo, descricao e Open Graph', () => {
    expect(raiz.title).toBeTruthy();
    expect(String(raiz.description).length).toBeGreaterThan(50);
    expect(raiz.openGraph?.locale).toBe('pt_BR');
    expect(raiz.openGraph?.title).toBeTruthy();
    expect(raiz.openGraph?.description).toBeTruthy();
    expect(raiz.metadataBase?.toString()).toContain('http');
  });

  it('cada pagina tem titulo proprio, descricao util e canonical', () => {
    for (const [rota, meta] of PAGINAS) {
      expect(meta.title, `${rota} sem titulo`).toBeTruthy();

      const descricao = String(meta.description ?? '');
      expect(descricao.length, `${rota} com descricao curta`)
        .toBeGreaterThan(50);
      expect(descricao.length, `${rota} com descricao longa`)
        .toBeLessThanOrEqual(200);

      expect(meta.alternates?.canonical, `${rota} sem canonical`).toBe(rota);
    }
  });

  it('as descricoes nao se repetem entre paginas', () => {
    const vistas = PAGINAS.map(([, m]) => String(m.description));
    expect(new Set(vistas).size).toBe(vistas.length);
  });

  it('a pagina do aplicativo fica fora do indice enquanto nao ha loja', () => {
    expect(aplicativo.robots).toMatchObject({ index: false });
  });

  it('o sitemap lista as paginas publicas com URL absoluta', () => {
    const rotas = sitemap();
    expect(rotas.length).toBeGreaterThanOrEqual(7);

    for (const rota of rotas) {
      expect(rota.url.startsWith(SITE_URL)).toBe(true);
      expect(rota.url).not.toMatch(/\/$/); // sem barra sobrando
      expect(rota.lastModified).toBeInstanceOf(Date);
    }

    expect(rotas[0].url).toBe(SITE_URL);
    // A pagina nao indexada nao entra no sitemap.
    expect(rotas.some((r) => r.url.includes('/aplicativo'))).toBe(false);
  });

  it('o robots libera o site e aponta o sitemap', () => {
    const r = robots();
    const regra = Array.isArray(r.rules) ? r.rules[0] : r.rules;

    expect(regra.userAgent).toBe('*');
    expect(regra.allow).toBe('/');
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it('nao ha repeticao artificial de palavra-chave nos titulos', () => {
    for (const [rota, meta] of PAGINAS) {
      const titulo = String(meta.title).toLowerCase();
      const palavras = titulo.split(/\s+/).filter(Boolean);
      const repetidas = new Set(
        palavras.filter((p) => palavras.filter((q) => q === p).length > 1),
      );
      expect(repetidas.size, `${rota} repete palavra no titulo`).toBe(0);
    }
  });
});
