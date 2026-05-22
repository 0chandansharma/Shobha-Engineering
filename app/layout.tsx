import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const BASE_URL = 'https://shobhaengineeringworkshop.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Shobha Engineering Workshop — Iron & Steel Fabricators, Lucknow',
    template: '%s | Shobha Engineering Workshop',
  },
  description:
    'Lucknow-based iron & steel fabricators since 1998. Heavy fabrication, precision machining, pressure vessels, industrial structures. Approved vendor for Indian Railways, RDSO & leading corporates. Call +91 94151 54200.',
  keywords: [
    'steel fabrication Lucknow',
    'iron fabrication Lucknow',
    'heavy fabrication Uttar Pradesh',
    'precision machining Lucknow',
    'pressure vessel manufacturer UP',
    'industrial structures Lucknow',
    'steel workshop Lucknow',
    'MS SS fabrication Lucknow',
    'Shobha Engineering Workshop',
    'fabricator Alambagh Lucknow',
  ],
  authors: [{ name: 'Shobha Engineering Workshop' }],
  creator: 'Shobha Engineering Workshop',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Shobha Engineering Workshop',
    title: 'Shobha Engineering Workshop — Iron & Steel Fabricators, Lucknow',
    description:
      'Lucknow-based iron & steel fabricators since 1998. Trusted by Indian Railways, RDSO & leading corporates.',
    images: [{ url: '/content/images/workshop/workshop-floor-wide-BEST.jpeg', width: 1200, height: 630, alt: 'Shobha Engineering Workshop floor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shobha Engineering Workshop — Iron & Steel Fabricators',
    description: 'Lucknow-based fabricators since 1998. Heavy fabrication, machining, vessels & structures.',
    images: ['/content/images/workshop/workshop-floor-wide-BEST.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: BASE_URL },
  verification: {
    // Add Google Search Console code here once verified
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Manufacturer',
              name: 'Shobha Engineering Workshop',
              description: 'Lucknow-based manufacturers and fabricators of iron and steel components for industrial sectors.',
              url: BASE_URL,
              logo: `${BASE_URL}/content/images/workshop/workshop-floor-wide-BEST.jpeg`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '25 A, Talkatora Road, Railway Colony, Alambagh',
                addressLocality: 'Lucknow',
                addressRegion: 'Uttar Pradesh',
                postalCode: '226004',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '26.8383',
                longitude: '80.9090',
              },
              telephone: '+91-9415154200',
              email: 'csiitism@gmail.com',
              foundingDate: '1998',
              areaServed: 'IN',
              taxID: '09AUTPS3751P1ZG',
              memberOf: [
                { '@type': 'Organization', name: 'Indian Industries Association', identifier: '35191' },
                { '@type': 'Organization', name: 'Talkatora Industrial Estate Industries Owners Association' },
              ],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
