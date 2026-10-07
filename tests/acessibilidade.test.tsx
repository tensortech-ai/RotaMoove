import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '@/app/page';
import ComoFunciona from '@/app/como-funciona/page';
import ParaClientes from '@/app/para-clientes/page';
import ParaPrestadores from '@/app/para-prestadores/page';
import Cobertura from '@/app/cobertura/page';
import Sobre from '@/app/sobre/page';
import Faq from '@/app/perguntas-frequentes/page';
import NotFound from '@/app/not-found';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';

const PAGES = [
  ['Home', HomePage],
  ['Como funciona', ComoFunciona],
  ['Para clientes', ParaClientes],
  ['Para prestadores', ParaPrestadores],
  ['Cobertura', Cobertura],
  ['Sobre', Sobre],
  ['Perguntas frequentes', Faq],
  ['404', NotFound],
] as const;

describe('acessibilidade', () => {
  it('a hierarquia de cabecalhos nao pula nivel', () => {
    for (const [nome, Page] of PAGES) {
      const { container, unmount } = render(<Page />);
      const niveis = Array.from(
        container.querySelectorAll('h1,h2,h3,h4,h5,h6'),
      ).map((h) => Number(h.tagName[1]));

      expect(niveis[0], `${nome} nao comeca no h1`).toBe(1);

      for (let i = 1; i < niveis.length; i++) {
        const salto = niveis[i] - niveis[i - 1];
        expect(
          salto,
          `${nome}: pulou de h${niveis[i - 1]} para h${niveis[i]}`,
        ).toBeLessThanOrEqual(1);
      }
      unmount();
    }
  });

  it('todo link e todo botao tem nome acessivel', () => {
    for (const [nome, Page] of PAGES) {
      const { container, unmount } = render(
        <>
          <Header />
          <Page />
          <Footer />
        </>,
      );

      for (const el of Array.from(container.querySelectorAll('a, button'))) {
        const texto =
          el.textContent?.trim()
          || el.getAttribute('aria-label')
          || el.querySelector('.sr-only')?.textContent?.trim()
          || '';
        expect(texto.length, `${nome}: ${el.outerHTML.slice(0, 90)}`)
          .toBeGreaterThan(0);
      }
      unmount();
    }
  });

  it('o primeiro elemento focavel pula para o conteudo', async () => {
    const user = userEvent.setup();
    render(
      <>
        <SkipLink />
        <Header />
      </>,
    );

    await user.tab();
    const focado = document.activeElement as HTMLElement;
    expect(focado.tagName).toBe('A');
    expect(focado.getAttribute('href')).toBe('#conteudo');
    expect(focado.textContent).toMatch(/pular para o conteúdo/i);
  });

  it('da para percorrer o cabecalho inteiro pelo teclado', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const alcancados: string[] = [];
    for (let i = 0; i < 10; i++) {
      await user.tab();
      const el = document.activeElement as HTMLElement;
      if (!el || el === document.body) break;
      alcancados.push(el.textContent?.trim() ?? '');
    }

    // Logotipo, os seis links e a chamada para acao.
    expect(alcancados.length).toBeGreaterThanOrEqual(8);
    expect(alcancados.some((t) => /Como funciona/.test(t))).toBe(true);
    expect(alcancados.some((t) => /Solicitar serviço/.test(t))).toBe(true);
  });

  it('o botao do menu de celular expoe o estado e o alvo', () => {
    render(<Header />);
    const botao = screen.getByRole('button', { name: /abrir menu/i });

    expect(botao).toHaveAttribute('aria-expanded');
    expect(botao).toHaveAttribute('aria-controls', 'menu-mobile');
    expect(botao).toHaveAttribute('type', 'button');
  });

  it('os icones decorativos ficam escondidos do leitor de tela', () => {
    const { container } = render(<Header />);
    for (const svg of Array.from(container.querySelectorAll('svg'))) {
      const rotulado =
        svg.getAttribute('aria-hidden') === 'true'
        || svg.getAttribute('role') === 'img';
      expect(rotulado, svg.outerHTML.slice(0, 80)).toBe(true);
    }
  });

  it('as perguntas do FAQ abrem pelo teclado, sem JavaScript', () => {
    const { container } = render(<Faq />);
    const detalhes = container.querySelectorAll('details');

    expect(detalhes.length).toBeGreaterThan(5);
    // <summary> e focavel e operavel por teclado por natureza.
    for (const d of Array.from(detalhes)) {
      expect(d.querySelector('summary')).toBeTruthy();
    }
  });

  it('as areas de toque das chamadas para acao tem altura minima', () => {
    const { container } = render(<HomePage />);
    const ctas = Array.from(container.querySelectorAll('a')).filter((a) =>
      /Solicitar serviço|Quero ser prestador/.test(a.textContent ?? ''),
    );

    expect(ctas.length).toBeGreaterThan(0);
    for (const cta of ctas) {
      expect(cta.className).toMatch(/min-h-\[44px\]/);
    }
  });

  it('a pagina 404 oferece caminho de volta', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('link', { name: /voltar ao início/i }),
    ).toHaveAttribute('href', '/');
  });
});
