import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import { NAV_LINKS } from '@/lib/nav';
import { BRAND, CTA_LABEL, addressLine, ctaHref, hasStoreLinks } from '@/lib/config';

describe('navegacao', () => {
  it('o cabecalho lista todos os links principais', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Principal' });

    for (const link of NAV_LINKS) {
      const item = within(nav).getByRole('link', { name: link.label });
      expect(item).toHaveAttribute('href', link.href);
    }
  });

  it('o rodape repete os links principais e o contato', () => {
    render(<Footer />);
    const rodape = screen.getByRole('contentinfo');

    for (const link of NAV_LINKS) {
      expect(
        within(rodape).getByRole('link', { name: link.label }),
      ).toHaveAttribute('href', link.href);
    }

    const email = within(rodape).getByRole('link', {
      name: /contato@/i,
    });
    expect(email.getAttribute('href')).toMatch(/^mailto:/);
  });

  it('o rodape traz slogan, CNPJ e endereco da empresa', () => {
    render(<Footer />);
    const rodape = screen.getByRole('contentinfo');

    expect(within(rodape).getByText(BRAND.tagline)).toBeInTheDocument();

    // CNPJ com a mascara oficial: barra antes dos quatro digitos do
    // estabelecimento. Um ponto no lugar da barra e erro de digitacao
    // comum e nao pode passar despercebido.
    expect(BRAND.cnpj).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/);
    expect(
      within(rodape).getByText(new RegExp(`CNPJ ${BRAND.cnpj}`.replace(/[.\/]/g, '\\$&'))),
    ).toBeInTheDocument();

    const endereco = within(rodape).getByText(addressLine);
    expect(endereco.tagName).toBe('ADDRESS');
  });

  it('o menu de celular abre, fecha e avisa o estado', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const botao = screen.getByRole('button', { name: 'Abrir menu' });
    expect(botao).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation', { name: /celular/i })).toBeNull();

    await user.click(botao);

    const fechar = screen.getByRole('button', { name: 'Fechar menu' });
    expect(fechar).toHaveAttribute('aria-expanded', 'true');
    const menu = screen.getByRole('navigation', { name: /celular/i });
    expect(within(menu).getAllByRole('link').length).toBe(NAV_LINKS.length + 2);

    await user.click(fechar);
    expect(screen.queryByRole('navigation', { name: /celular/i })).toBeNull();
  });

  it('o menu de celular fecha com Esc', async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole('button', { name: 'Abrir menu' }));
    expect(screen.getByRole('navigation', { name: /celular/i })).toBeTruthy();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('navigation', { name: /celular/i })).toBeNull();
  });

  it('as chamadas para acao apontam para o destino configurado', () => {
    render(
      <>
        <Cta audience="cliente" />
        <Cta audience="prestador" />
      </>,
    );

    expect(
      screen.getByRole('link', { name: CTA_LABEL.cliente }),
    ).toHaveAttribute('href', ctaHref('cliente'));
    expect(
      screen.getByRole('link', { name: CTA_LABEL.prestador }),
    ).toHaveAttribute('href', ctaHref('prestador'));
  });

  it('sem link de loja, a chamada leva a pagina interna - nunca a um link falso', () => {
    // Guarda a decisao da fase 12: nada de URL de loja inventada.
    if (!hasStoreLinks) {
      expect(ctaHref('cliente')).toBe('/aplicativo?perfil=cliente');
      expect(ctaHref('prestador')).toBe('/aplicativo?perfil=prestador');
    }
  });

  it('nenhum link aponta para vazio ou para "#"', () => {
    const { container } = render(
      <>
        <Header />
        <Footer />
      </>,
    );
    for (const link of Array.from(container.querySelectorAll('a'))) {
      const href = link.getAttribute('href');
      expect(href, `link "${link.textContent}" sem destino`).toBeTruthy();
      expect(href).not.toBe('#');
    }
  });
});
