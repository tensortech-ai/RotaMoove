'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/config';
import { NAV_LINKS } from '@/lib/nav';
import Cta from './Cta';

/**
 * Cabecalho do site.
 *
 * Unico componente de cliente do projeto: o menu de celular precisa
 * abrir e fechar, avisar leitores de tela pelo aria-expanded e fechar
 * no Esc. O resto do site e renderizado no servidor.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Trocar de pagina fecha o menu.
  useEffect(() => setOpen(false), [pathname]);

  // Esc fecha o menu, como em qualquer camada sobreposta.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={`${BRAND.name} — página inicial`}
        >
          {/*
            <img> e nao next/image de proposito: e um SVG estatico de 1 KB
            em /public, gerado por tool/gerar_icones.py junto com o icone do
            aplicativo. next/image nao otimiza SVG, e transformar a marca em
            componente inline duplicaria a geometria - e e a duplicacao que
            faria o favicon e o icone do telefone se separarem com o tempo.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icone.svg"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span className="text-lg font-bold tracking-tight">
            {BRAND.name}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-primary-light text-primary'
                        : 'text-ink-muted hover:bg-canvas hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Cta audience="cliente" className="px-4 py-2 text-sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
        >
          <span className="sr-only">
            {open ? 'Fechar menu' : 'Abrir menu'}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Principal (celular)" className="container-page py-3">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className="block rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-canvas"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 pb-2">
              <Cta audience="cliente" />
              <Cta audience="prestador" variant="secondary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
