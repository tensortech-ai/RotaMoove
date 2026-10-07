import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BRAND, SITE_URL } from '@/lib/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Carretos e mudanças em São Paulo`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    'Descreva sua mudança ou carreto, receba orçamentos de prestadores '
    + 'que atendem a sua região no estado de São Paulo e compare antes de '
    + 'contratar.',
  applicationName: BRAND.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: BRAND.name,
    title: `${BRAND.name} — Carretos e mudanças em São Paulo`,
    description:
      'Receba orçamentos de prestadores da sua região e compare antes de '
      + 'contratar seu carreto ou mudança.',
  },
  twitter: {
    card: 'summary',
    title: `${BRAND.name} — Carretos e mudanças em São Paulo`,
    description:
      'Receba orçamentos de prestadores da sua região e compare antes de '
      + 'contratar seu carreto ou mudança.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icone.svg' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1B5FCB',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
