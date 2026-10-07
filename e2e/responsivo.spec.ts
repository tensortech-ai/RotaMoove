import { expect, test } from '@playwright/test';

/**
 * Larguras exigidas pela fase 12. A de 320px e o pior caso real que
 * ainda circula (iPhone SE de primeira geracao).
 */
const LARGURAS = [
  { nome: 'celular estreito', width: 320, height: 720 },
  { nome: 'celular comum', width: 390, height: 844 },
  { nome: 'tablet', width: 768, height: 1024 },
  { nome: 'desktop', width: 1280, height: 800 },
  { nome: 'tela larga', width: 1920, height: 1080 },
];

const ROTAS = [
  '/',
  '/como-funciona',
  '/para-clientes',
  '/para-prestadores',
  '/cobertura',
  '/sobre',
  '/perguntas-frequentes',
  '/aplicativo',
];

test.describe('layout responsivo', () => {
  for (const largura of LARGURAS) {
    for (const rota of ROTAS) {
      test(`${rota} nao rola na horizontal em ${largura.nome} (${largura.width}px)`, async ({
        page,
      }) => {
        await page.setViewportSize({
          width: largura.width,
          height: largura.height,
        });
        await page.goto(rota);

        const transbordou = await page.evaluate(() => {
          const doc = document.documentElement;
          return doc.scrollWidth - doc.clientWidth;
        });

        // Tolerancia zero: qualquer sobra vira barra de rolagem lateral.
        expect(
          transbordou,
          `${rota} sobra ${transbordou}px em ${largura.width}px`,
        ).toBeLessThanOrEqual(0);
      });
    }
  }

  test('nenhum elemento escapa da largura da tela em 320px', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 720 });

    for (const rota of ROTAS) {
      await page.goto(rota);

      const escapou = await page.evaluate(() => {
        const limite = document.documentElement.clientWidth;
        const fora: string[] = [];
        document.querySelectorAll('body *').forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width === 0 && r.height === 0) return;
          if (r.right > limite + 1 || r.left < -1) {
            fora.push(
              `${el.tagName.toLowerCase()}.${(el.className || '')
                .toString()
                .slice(0, 40)} (${Math.round(r.left)}..${Math.round(r.right)})`,
            );
          }
        });
        return fora.slice(0, 5);
      });

      expect(escapou, `${rota}: ${escapou.join(' | ')}`).toEqual([]);
    }
  });
});

test.describe('navegacao em tela pequena', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
  });

  test('o menu abre, navega e fecha', async ({ page }) => {
    await page.goto('/');

    const abrir = page.getByRole('button', { name: 'Abrir menu' });
    await expect(abrir).toBeVisible();

    await abrir.click();
    const menu = page.getByRole('navigation', { name: /celular/i });
    await expect(menu).toBeVisible();

    await menu.getByRole('link', { name: 'Como funciona' }).click();
    await expect(page).toHaveURL(/\/como-funciona$/);

    // Trocar de pagina fecha o menu.
    await expect(
      page.getByRole('navigation', { name: /celular/i }),
    ).toBeHidden();
  });

  test('as chamadas para acao continuam clicaveis e com alvo suficiente', async ({
    page,
  }) => {
    await page.goto('/');

    const cta = page
      .getByRole('link', { name: 'Solicitar serviço' })
      .first();
    await expect(cta).toBeVisible();

    const caixa = await cta.boundingBox();
    expect(caixa!.height).toBeGreaterThanOrEqual(44);

    await cta.click();
    await expect(page).toHaveURL(/\/aplicativo/);
  });
});

test.describe('navegacao por teclado', () => {
  test('o primeiro Tab revela o atalho para o conteudo', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const atalho = page.getByRole('link', { name: /pular para o conteúdo/i });
    await expect(atalho).toBeFocused();
    // So aparece quando focado - antes disso fica fora da tela.
    await expect(atalho).toBeVisible();
  });

  test('o foco fica visivel ao percorrer o cabecalho', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    for (let i = 0; i < 3; i++) await page.keyboard.press('Tab');

    const contorno = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      if (!el) return null;
      const s = getComputedStyle(el);
      return { shadow: s.boxShadow, outline: s.outlineStyle };
    });

    // O anel de foco e desenhado por box-shadow (ring do Tailwind).
    expect(
      contorno?.shadow !== 'none' || contorno?.outline !== 'none',
    ).toBe(true);
  });
});

test.describe('metadados servidos', () => {
  test('a home entrega titulo, descricao e Open Graph', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/RotaMoove/);

    const descricao = await page
      .locator('meta[name="description"]')
      .getAttribute('content');
    expect(descricao?.length ?? 0).toBeGreaterThan(50);

    await expect(page.locator('meta[property="og:locale"]'))
      .toHaveAttribute('content', 'pt_BR');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    expect(await page.locator('html').getAttribute('lang')).toBe('pt-BR');
  });

  test('robots.txt e sitemap.xml respondem', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain('Sitemap:');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    expect(xml).toContain('<urlset');
    expect(xml).toContain('/como-funciona');
  });

  test('uma rota inexistente devolve 404 com caminho de volta', async ({
    page,
  }) => {
    const resposta = await page.goto('/pagina-que-nao-existe');
    expect(resposta?.status()).toBe(404);
    await expect(
      page.getByRole('link', { name: /voltar ao início/i }),
    ).toBeVisible();
  });
});
