import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrganizationSchema, WebSiteSchema } from '@/components/schema/Organization';
import { SITE } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — The GLP-1 companion built around muscle preservation`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — The GLP-1 companion built around muscle preservation`,
    description: SITE.description,
    images: [{ url: `${SITE.url}/og.png`, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — The GLP-1 companion built around muscle preservation`,
    description: SITE.description,
    images: [`${SITE.url}/og.png`],
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Apple Smart App Banner — TODO §7 open item: replace placeholder app-id with real one once App Store URL is confirmed */}
        {/* <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" /> */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Privacy-friendly cookieless analytics — Plausible.
            Per build brief §1: no Google Analytics or ad pixels.
            Self-host Plausible or use Vercel Analytics — either is acceptable. */}
        <Script
          defer
          data-domain="muscleguardglp.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
