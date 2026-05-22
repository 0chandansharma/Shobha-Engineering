import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve — Chemical, Construction, Food & More',
  description:
    'Shobha Engineering Workshop supplies precision fabricated components to chemical plants, breweries, construction companies, surface treatment firms, technology companies, and enterprises across India.',
};

const INDUSTRIES = [
  {
    title: 'Heavy Industry & Infrastructure',
    desc: 'Structural steel assemblies, machined components, and fabricated structures for large-scale industrial and infrastructure projects requiring high-precision work.',
    img: '/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg',
    alt: 'Heavy structural fabrication for industry',
    clients: ['PTC PVT LTD', 'Aerolley Technologies'],
  },
  {
    title: 'Chemical & Process Industry',
    desc: 'Pressure vessels, piping systems, heat exchangers, and process equipment for chemical manufacturers and pesticide companies operating in Uttar Pradesh and beyond.',
    img: '/content/images/products/product-pressure-vessel-pump-skid-01.jpeg',
    alt: 'Pressure vessel and pump skid for chemical industry',
    clients: ['India Pesticides Ltd', 'Swarup Chemical'],
  },
  {
    title: 'Food & Beverage',
    desc: 'Stainless steel fabrication, storage tanks, and hygienic process equipment for breweries and food processing facilities that require food-grade materials and finishes.',
    img: '/content/images/products/product-large-drum-on-transport.webp',
    alt: 'Large stainless steel drum for food and beverage',
    clients: ['Mohan Goldwater Breweries'],
  },
  {
    title: 'Construction & Real Estate',
    desc: 'Structural steel fabrication, site erection, and custom steel components for commercial and infrastructure construction projects across Lucknow and Uttar Pradesh.',
    img: '/content/images/stock-pexels/stock-welding-structural-steel-shed.jpg',
    alt: 'Structural steel fabrication for construction',
    clients: ['Katerra India', 'Anand Buildtech'],
  },
  {
    title: 'Municipal & Utility Projects',
    desc: 'Water tankers, storage vessels, and utility structures for municipal and public utility projects — built to specification and delivered on time.',
    img: '/content/images/products/product-water-tanker-gramPanchayat-client.png',
    alt: 'Water tanker for municipal utility project',
    clients: ['Municipal Utility Clients'],
  },
  {
    title: 'Surface Finishing & Galvanizing',
    desc: 'Fabricated components and structures for galvanizing and surface treatment companies — including jigs, fixtures, baskets, and handling equipment.',
    img: '/content/images/process/process-welding-grid-closeup.jpeg',
    alt: 'Precision welding for surface treatment industry',
    clients: ['Galvano India'],
  },
  {
    title: 'Technology & Engineering Firms',
    desc: 'Custom precision machined and fabricated components for engineering consultancies and technology companies who need reliable manufacturing partners.',
    img: '/content/images/stock-pexels/stock-machined-precision-rings.jpg',
    alt: 'Precision machined rings for technology sector',
    clients: ['Aerolley Technologies', 'PTC PVT LTD'],
  },
  {
    title: 'Enterprises & Manufacturers',
    desc: 'One-off and batch production for enterprises across Uttar Pradesh and India. We are approachable and reliable — a trusted fabrication partner for businesses of all sizes.',
    img: '/content/images/workshop/workshop-floor-wide-BEST.jpeg',
    alt: 'Workshop floor at Shobha Engineering',
    clients: ['Prag Polymers', 'PN International', 'And many more'],
  },
];

function CTABanner() {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,100px) 0',
      background: 'var(--primary)',
      backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FCD34D' }}>Your industry, our expertise</div>
        <h2 style={{ color: '#fff', maxWidth: 560, margin: '0 auto 16px' }}>
          We serve any industry that needs quality steel fabrication.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 36px' }}>
          Not sure if we are the right fit? Call us or send your requirements — we will be honest about what we can and cannot do.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-light">Request a Quote →</Link>
          <a href="tel:+919415154200" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
            Call +91 94151 54200
          </a>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <div className="page-enter">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="section--deep section">
        <div className="container">
          <div className="eyebrow">Industries</div>
          <h1 style={{ maxWidth: 640, marginBottom: 20, color: '#fff' }}>
            Serving industry across India since 1998.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 580, color: '#C7D2DF' }}>
            From chemical plants to breweries, from construction firms to technology companies — our fabricated components power operations across sectors.
          </p>
        </div>
      </section>

      {/* ── Industry Cards ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {INDUSTRIES.map(ind => (
              <div key={ind.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }} className="img-zoom">
                  <img
                    src={ind.img}
                    alt={ind.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '22px 24px 26px' }}>
                  <h3 style={{ marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, marginBottom: 16 }}>{ind.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {ind.clients.map(c => (
                      <span key={c} style={{
                        fontSize: 11, fontWeight: 600, color: 'var(--primary)',
                        background: 'var(--primary-light)', borderRadius: 100,
                        padding: '3px 10px',
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Banner ─────────────────────────────────────────────── */}
      <section className="section section--soft">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Our clients</div>
          <h2 style={{ marginBottom: 16 }}>100+ clients served across India</h2>
          <p style={{ maxWidth: 560, margin: '0 auto 40px' }}>
            From large industrial corporations to neighbourhood factories — we treat every client with the same commitment to quality.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', maxWidth: 800, margin: '0 auto' }}>
            {[
              'India Pesticides Ltd',
              'Swarup Chemical', 'Mohan Goldwater Breweries', 'Aerolley Technologies',
              'Katerra India', 'Galvano India', 'Anand Buildtech', 'PN International',
              'PTC PVT LTD', 'Prag Polymers',
            ].map(c => (
              <span key={c} style={{
                border: '1px solid var(--line)', borderRadius: 8,
                padding: '8px 16px', fontSize: 13, fontWeight: 600, color: 'var(--ink-2)',
                background: '#fff',
              }}>
                {c}
              </span>
            ))}
            <span style={{
              border: '2px dashed var(--line)', borderRadius: 8,
              padding: '8px 16px', fontSize: 13, fontWeight: 600, color: 'var(--muted)',
            }}>
              + Many more SMEs
            </span>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
