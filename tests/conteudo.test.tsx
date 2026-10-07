import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import HomePage from '@/app/page';
import ComoFunciona from '@/app/como-funciona/page';
import ParaClientes from '@/app/para-clientes/page';
import ParaPrestadores from '@/app/para-prestadores/page';
import Cobertura from '@/app/cobertura/page';
import Sobre from '@/app/sobre/page';
import Faq from '@/app/perguntas-frequentes/page';
import { CTA_LABEL } from '@/lib/config';
import { FAQ, SERVICE_TYPES } from '@/lib/content';

const PAGES = [
  ['Home', HomePage],
  ['Como funciona', ComoFunciona],
  ['Para clientes', ParaClientes],
  ['Para prestadores', ParaPrestadores],
  ['Cobertura', Cobertura],
  ['Sobre', Sobre],
  ['Perguntas frequentes', Faq],
] as const;

describe('conteudo das paginas', () => {
  it('cada pagina tem exatamente um h1', () => {
    for (const [nome, Page] of PAGES) {
      const { container, unmount } = render(<Page />);
      const h1 = container.querySelectorAll('h1');
      expect(h1.length, `${nome} deveria ter 1 h1`).toBe(1);
      expect(h1[0].textContent?.trim()).not.toBe('');
      unmount();
    }
  });

  it('a home explica o que e, para quem e o que fazer', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { level: 1 }).textContent,
    ).toMatch(/mudança/i);

    // As duas chamadas para acao do produto.
    expect(
      screen.getAllByRole('link', { name: CTA_LABEL.cliente }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('link', { name: CTA_LABEL.prestador }).length,
    ).toBeGreaterThan(0);

    // Posicionamento geografico correto, sem prometer o Brasil inteiro.
    expect(screen.getAllByText(/São Paulo/i).length).toBeGreaterThan(0);
  });

  it('os tres tipos de servico reais aparecem na home', () => {
    render(<HomePage />);
    for (const tipo of SERVICE_TYPES) {
      expect(
        screen.getByRole('heading', { name: tipo.name }),
      ).toBeInTheDocument();
    }
  });

  it('o FAQ responde todas as perguntas cadastradas', () => {
    render(<Faq />);
    for (const item of FAQ) {
      const pergunta = screen.getByText(item.question);
      expect(pergunta).toBeInTheDocument();
    }
    // O <details> nativo mantem a resposta no DOM mesmo fechado.
    expect(screen.getByText(FAQ[0].answer)).toBeInTheDocument();
  });

  it('nao promete pagamento, GPS nem notificacao push', () => {
    const { container } = render(<Faq />);
    const texto = container.textContent ?? '';

    // Cada um destes assuntos aparece NEGADO, nunca prometido.
    expect(texto).toMatch(/não processa pagamentos/i);
    expect(texto).toMatch(/sem rastreamento|não há rastreamento/i);
    expect(texto).toMatch(/não há notificações push|ainda não/i);
  });

  it('nao ha texto de preenchimento em nenhuma pagina', () => {
    const PROIBIDO = [
      /lorem ipsum/i,
      /placeholder/i,
      /\bTODO\b/,
      /\bFIXME\b/,
      /texto de exemplo/i,
      /em construção/i,
    ];

    for (const [nome, Page] of PAGES) {
      const { container, unmount } = render(<Page />);
      const texto = container.textContent ?? '';
      for (const padrao of PROIBIDO) {
        expect(padrao.test(texto), `${nome} contem ${padrao}`).toBe(false);
      }
      unmount();
    }
  });

  it('nao inventa numeros de clientes, prestadores ou avaliacoes', () => {
    // Afirmacoes que exigiriam metrica real de negocio.
    const INVENTADO = [
      /\d[\d.,]*\s*(mil|milh(ão|ões))\s+(de\s+)?(clientes|prestadores|usuários|mudanças)/i,
      /\+\s*\d[\d.,]*\s*(clientes|prestadores|usuários)/i,
      /\d[\d.,]*\s*(clientes|prestadores|usuários)\s+(atendidos|cadastrados|satisfeitos)/i,
      /(maior|melhor|nº\s*1|n[úu]mero\s*1)\s+(plataforma|aplicativo|empresa)/i,
      /menor preço garantido|preço garantido|garantia de preço/i,
      /prêmio|premiad[ao]|eleita/i,
    ];

    for (const [nome, Page] of PAGES) {
      const { container, unmount } = render(<Page />);
      const texto = container.textContent ?? '';
      for (const padrao of INVENTADO) {
        expect(padrao.test(texto), `${nome} contem ${padrao}`).toBe(false);
      }
      unmount();
    }
  });

  it('a cobertura diz São Paulo e nao afirma cobertura nacional', () => {
    const { container } = render(<Cobertura />);
    const texto = container.textContent ?? '';

    expect(texto).toMatch(/estado de São Paulo/i);
    expect(/todo o Brasil|nacional|em todo país|em todo o país/i.test(texto))
      .toBe(false);
    // A ressalva sobre disponibilidade precisa estar presente.
    expect(texto).toMatch(/depende|pode receber menos/i);
  });

  it('a pagina do prestador avisa que a demanda varia', () => {
    const { container } = render(<ParaPrestadores />);
    const texto = container.textContent ?? '';
    expect(texto).toMatch(/depende da demanda|não prometemos/i);
  });

  it('as etapas do servico sao uma lista ordenada', () => {
    const { container } = render(<ComoFunciona />);
    const listas = container.querySelectorAll('ol');
    expect(listas.length).toBeGreaterThanOrEqual(2);
    // Cinco etapas de cada lado, como no aplicativo.
    expect(within(listas[0] as HTMLElement).getAllByRole('listitem'))
      .toHaveLength(5);
  });
});
