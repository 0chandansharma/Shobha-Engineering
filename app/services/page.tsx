import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Heavy Fabrication, Machining & More',
  description:
    'Shobha Engineering Workshop offers heavy steel fabrication, precision machining, sheet metal work, custom engineered components, industrial erection, and annual maintenance contracts in Lucknow, UP.',
};

const SERVICES = [
  {
    num: '01',
    title: 'Heavy Steel Fabrication',
    img: '/content/images/stock-pexels/stock-welding-structural-steel-shed.jpg',
    desc: 'We fabricate large structural steel assemblies, frames, tanks, and skids for industrial and infrastructure applications. From raw plate and section to finished weldment — cut, fit, weld, grind, and NDT on-site or in our Lucknow workshop.',
    bullets: [
      'Structural steel frames and platforms',
      'Process skids and equipment supports',
      'Large-diameter pressure vessels and storage tanks',
      'MS and SS fabrication up to heavy thickness',
    ],
  },
  {
    num: '02',
    title: 'Precision Machining',
    img: '/content/images/stock-pexels/stock-drilling-milling-closeup.jpg',
    desc: 'Our conventional turning, milling, boring, and drilling operations produce tight-tolerance components for railways, process equipment, and industrial machinery. We work from drawings, samples, or reverse-engineered specifications.',
    bullets: [
      'Lathe turning — OD, ID, threading, facing',
      'Milling, boring, and keyway cutting',
      'Gear and sprocket machining',
      'Precision flanges, couplings, and bushings',
    ],
  },
  {
    num: '03',
    title: 'Sheet Metal Work',
    img: '/content/images/stock-pexels/stock-grinding-sparks-closeup.jpg',
    desc: 'Cutting, bending, rolling, and forming of mild steel, stainless steel, and alloy sheets into enclosures, panels, hoppers, chutes, ducts, and custom profiles. We handle both one-off prototypes and repeat production batches.',
    bullets: [
      'Plate rolling — cones, cylinders, and transitions',
      'Shearing, plasma and flame cutting',
      'Press bending and forming',
      'Control panel enclosures and duct work',
    ],
  },
  {
    num: '04',
    title: 'Custom Engineered Components',
    img: '/content/images/stock-pexels/stock-machined-precision-rings.jpg',
    desc: 'When off-the-shelf does not fit, we design and manufacture bespoke components to your exact specification. We accept DWG, DXF, PDF drawings or work directly from sample parts and field measurements.',
    bullets: [
      'Pipe elbows, reducers, and special fittings',
      'Heat exchanger components and tube sheets',
      'Dished ends and pressure vessel heads',
      'One-off and repeat custom parts',
    ],
  },
  {
    num: '05',
    title: 'Industrial Structures & Erection',
    img: '/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg',
    desc: 'Beyond fabrication, our site erection team installs structural steel, piping systems, equipment skids, and platforms at your facility. We coordinate with civil and process teams to ensure safe, on-time erection.',
    bullets: [
      'Structural steel erection and alignment',
      'Piping installation and tie-in',
      'Equipment skid commissioning support',
      'Night-shift and fast-track erection capability',
    ],
  },
  {
    num: '06',
    title: 'Maintenance & AMC',
    img: '/content/images/machinery/machinery-lathe-in-operation.jpeg',
    desc: 'Annual Maintenance Contracts (AMC) keep your plant equipment and structures in reliable condition. We offer scheduled inspections, preventive maintenance, repairs, and emergency breakdown support for manufacturing and process plants.',
    bullets: [
      'Scheduled preventive maintenance visits',
      'Structural and equipment repairs on-site',
      'Emergency breakdown response',
      'Spares fabrication and replacement',
    ],
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
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FCD34D' }}>Get started</div>
        <h2 style={{ color: '#fff', maxWidth: 560, margin: '0 auto 16px' }}>
          Have a project in mind? Let&apos;s talk.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 36px' }}>
          Send us your drawings or a brief description. We will review and respond with a detailed quotation within 24 hours.
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

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="section--deep section">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1 style={{ maxWidth: 640, marginBottom: 20, color: '#fff' }}>
            Full-cycle fabrication and engineering services.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 580, color: '#C7D2DF' }}>
            From precision machining to heavy structural fabrication — everything in-house at our Lucknow workshop, delivered to your site across India.
          </p>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {SERVICES.map(s => (
              <div key={s.num} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/7', overflow: 'hidden' }} className="img-zoom">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: 'var(--primary)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: 14, flexShrink: 0,
                    }}>
                      {s.num}
                    </div>
                    <h3 style={{ marginBottom: 0, paddingTop: 6 }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, marginBottom: 20 }}>{s.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {s.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
