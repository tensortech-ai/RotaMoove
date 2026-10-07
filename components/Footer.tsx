import Link from 'next/link';
import { BRAND, SOCIAL_LINKS, addressLine, whatsappUrl } from '@/lib/config';
import { NAV_LINKS } from '@/lib/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              {/*
                <img> e nao next/image de proposito: e um SVG estatico de
                1 KB em /public, gerado por tool/gerar_icones.py junto com
                o icone do aplicativo. next/image nao otimiza SVG, e
                transformar a marca em componente inline duplicaria a
                geometria - e e a duplicacao que faria o favicon e o icone
                do telefone se separarem com o tempo.
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
            </div>
            <p className="mt-3 text-sm font-medium text-ink">
              {BRAND.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Plataforma que conecta quem precisa de um carreto ou de uma
              mudança a prestadores que atendem a região. Atendimento em
              cidades do estado de São Paulo.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Navegação</h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Contato</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${BRAND.supportEmail}`}
                  className="text-sm text-ink-muted hover:text-primary hover:underline"
                >
                  {BRAND.supportEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.supportPhone.replace(/\D/g, '')}`}
                  className="text-sm text-ink-muted hover:text-primary hover:underline"
                >
                  {BRAND.supportPhone}
                </a>
              </li>
              <li>
                {/* rel="noopener" em todo link externo: sem ele a pagina
                    aberta ganha acesso a window.opener. */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-primary hover:underline"
                >
                  WhatsApp {BRAND.whatsapp}
                </a>
              </li>
              {SOCIAL_LINKS.map((rede) => (
                <li key={rede.href}>
                  <a
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted hover:text-primary hover:underline"
                  >
                    {rede.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/aplicativo"
                  className="text-sm text-ink-muted hover:text-primary hover:underline"
                >
                  Aplicativo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-1 border-t border-line pt-6">
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/termos"
              className="text-xs text-ink-muted hover:text-primary hover:underline"
            >
              Termos de uso
            </Link>
            <Link
              href="/privacidade"
              className="text-xs text-ink-muted hover:text-primary hover:underline"
            >
              Política de privacidade
            </Link>
          </p>
          <p className="text-xs leading-relaxed text-ink-muted">
            © {year} {BRAND.legalName} — CNPJ {BRAND.cnpj}
          </p>
          {/*
            <address> e o elemento proprio para o endereco de contato do
            site. `not-italic` porque o padrao do navegador e italico e o
            reset do Tailwind nao mexe nisso.
          */}
          <address className="text-xs not-italic leading-relaxed text-ink-muted">
            {addressLine}
          </address>
        </div>
      </div>
    </footer>
  );
}
