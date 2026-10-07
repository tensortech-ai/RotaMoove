import { expect, test } from '@playwright/test';

/**
 * Contraste medido no navegador, sobre o texto realmente renderizado.
 *
 * Existe porque a fase 12 encontrou texto em #94A3B8 sobre branco -
 * 2,56:1, bem abaixo do minimo. Conferir a olho nao pega isso.
 *
 * Criterio WCAG 2.1 AA: 4,5:1 para texto normal e 3:1 para texto
 * grande (>= 24px, ou >= 18,66px em negrito).
 */
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

test.describe('contraste do texto', () => {
  for (const rota of ROTAS) {
    test(`${rota} respeita o contraste minimo`, async ({ page }) => {
      await page.goto(rota);

      const reprovados = await page.evaluate(() => {
        const parse = (cor: string): [number, number, number, number] => {
          const n = cor.match(/[\d.]+/g)!.map(Number);
          return [n[0], n[1], n[2], n[3] ?? 1];
        };

        const relLum = ([r, g, b]: number[]) => {
          const f = (c: number) => {
            const v = c / 255;
            return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
          };
          return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        };

        /** Mistura a cor do texto com o fundo quando ha transparencia. */
        const mistura = (
          fg: [number, number, number, number],
          bg: number[],
        ) => [
          fg[0] * fg[3] + bg[0] * (1 - fg[3]),
          fg[1] * fg[3] + bg[1] * (1 - fg[3]),
          fg[2] * fg[3] + bg[2] * (1 - fg[3]),
        ];

        /** Primeiro ancestral com fundo opaco. */
        const fundoDe = (el: Element): number[] => {
          let atual: Element | null = el;
          while (atual) {
            const c = parse(getComputedStyle(atual).backgroundColor);
            if (c[3] === 1) return [c[0], c[1], c[2]];
            atual = atual.parentElement;
          }
          return [255, 255, 255];
        };

        const falhas: string[] = [];

        document.querySelectorAll('body *').forEach((el) => {
          // So elementos que tem texto proprio visivel.
          const proprio = Array.from(el.childNodes)
            .filter((n) => n.nodeType === Node.TEXT_NODE)
            .map((n) => n.textContent?.trim() ?? '')
            .join('');
          if (!proprio) return;
          if (el.getAttribute('aria-hidden') === 'true') return;

          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) return;

          const s = getComputedStyle(el);
          if (s.visibility === 'hidden' || s.display === 'none') return;
          // Texto escondido para leitor de tela nao e visto por ninguem.
          if (s.clip === 'rect(0px, 0px, 0px, 0px)') return;

          const bg = fundoDe(el);
          const fg = mistura(parse(s.color), bg);

          const l1 = relLum(fg);
          const l2 = relLum(bg);
          const razao =
            (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

          const px = parseFloat(s.fontSize);
          const peso = Number(s.fontWeight) || 400;
          const grande = px >= 24 || (px >= 18.66 && peso >= 700);
          const minimo = grande ? 3 : 4.5;

          if (razao < minimo) {
            falhas.push(
              `${el.tagName.toLowerCase()} "${proprio.slice(0, 32)}" `
              + `${razao.toFixed(2)}:1 (min ${minimo}) cor=${s.color}`,
            );
          }
        });

        return falhas.slice(0, 8);
      });

      expect(reprovados, reprovados.join('\n')).toEqual([]);
    });
  }
});
