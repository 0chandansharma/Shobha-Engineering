import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products — Fabricated Steel Components & Equipment',
  description:
    'Pressure vessels, pipe elbows, heat exchangers, water tankers, structural components and more — all fabricated at Shobha Engineering Workshop, Lucknow. Available for new orders.',
};

const PRODUCT_GROUPS = [
  {
    title: 'Pressure Vessels & Process Equipment',
    sub: 'Fabricated to IS-2825, ASME and client specifications',
    items: [
      { title: 'Vertical Pressure Vessels', img: '/content/images/products/product-pressure-vessels-multiple.webp', alt: 'Multiple pressure vessels' },
      { title: 'Pump Skid Assembly', img: '/content/images/products/product-pressure-vessel-pump-skid-01.jpeg', alt: 'Pressure vessel pump skid' },
      { title: 'Vessel with Pump Skid (Night)', img: '/content/images/products/product-pressure-vessel-skid-night.jpeg', alt: 'Pressure vessel skid night view' },
      { title: 'Vessel Shell in Progress', img: '/content/images/products/product-vessel-shell-in-progress.webp', alt: 'Vessel shell during fabrication' },
      { title: 'Delivery & Dispatch', img: '/content/images/projects/project-vessel-delivery-team.webp', alt: 'Vessel delivery team' },
    ],
  },
  {
    title: 'Pipe Fittings & Industrial Piping',
    sub: 'Large-diameter elbows, bends, and special fittings in MS and SS',
    items: [
      { title: 'Large Pipe Elbow — Fabricated', img: '/content/images/products/product-large-pipe-elbow-fabricated.webp', alt: 'Large fabricated pipe elbow' },
      { title: 'Pipe Elbows — Batch Delivery', img: '/content/images/projects/project-pipe-elbows-batch-delivery.webp', alt: 'Batch of pipe elbows for delivery' },
      { title: 'Pipe & Steel Work', img: '/content/images/workshop/workshop-floor-pipes-steel.jpeg', alt: 'Pipes and steel work on workshop floor' },
      { title: 'Process Piping — Worker', img: '/content/images/process/process-steelpipes-worker.jpeg', alt: 'Worker with steel pipes' },
      { title: 'Process Welding — Pipes', img: '/content/images/process/process-welding-pipes-worker.jpeg', alt: 'Welding pipes' },
    ],
  },
  {
    title: 'Heat Exchangers & Specialty Equipment',
    sub: 'Shell & tube designs, filter housings, and custom process equipment',
    items: [
      { title: 'Heat Exchanger / Filter Housing', img: '/content/images/products/product-heat-exchanger-filter-housing.webp', alt: 'Heat exchanger filter housing' },
      { title: 'Dished Ends & Vessel Heads', img: '/content/images/products/product-dished-ends-vessel-heads.webp', alt: 'Dished ends and vessel heads' },
      { title: 'Large Drum on Transport', img: '/content/images/products/product-large-drum-on-transport.webp', alt: 'Large fabricated drum on transport vehicle' },
      { title: 'Pump Control Panel', img: '/content/images/products/product-pump-control-panel-assembly.jpeg', alt: 'Pump control panel assembly' },
      { title: 'Vessel Team Lifting', img: '/content/images/projects/project-vessel-team-lifting.webp', alt: 'Team lifting finished vessel' },
    ],
  },
  {
    title: 'Water Tankers, Structures & Machined Parts',
    sub: 'Government, agriculture, and industrial utility fabrications',
    items: [
      { title: 'Water Tanker — Gram Panchayat', img: '/content/images/products/product-water-tanker-gramPanchayat-client.png', alt: 'Water tanker for Gram Panchayat' },
      { title: 'Machined Gear & Sprocket', img: '/content/images/machinery/machinery-custom-gear-sprocket.jpeg', alt: 'Custom machined gear and sprocket' },
      { title: 'Machined Parts — Flanges', img: '/content/images/process/process-machined-parts-flanges.jpg', alt: 'Machined flanges and parts' },
      { title: 'Heavy Structure — Night Work', img: '/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg', alt: 'Heavy structural steel night work' },
      { title: 'Crane Lifting Large Tanks', img: '/content/images/stock-pexels/stock-crane-lifting-large-tanks-india.jpg', alt: 'Crane lifting large fabricated tanks' },
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
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FCD34D' }}>New orders welcome</div>
        <h2 style={{ color: '#fff', maxWidth: 560, margin: '0 auto 16px' }}>
          Need something fabricated? Let&apos;s build it.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 36px' }}>
          Share your drawings or specifications and we will send you a detailed, no-obligation quotation.
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

export default function ProductsPage() {
  return (
    <div className="page-enter">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="section--deep section">
        <div className="container">
          <div className="eyebrow">Products</div>
          <h1 style={{ maxWidth: 640, marginBottom: 20, color: '#fff' }}>
            What we manufacture &amp; deliver.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 580, color: '#C7D2DF', marginBottom: 20 }}>
            From pressure vessels to pipe elbows, heat exchangers to water tankers — real products delivered to real clients.
          </p>
          <div style={{
            display: 'inline-block', background: 'rgba(245,158,11,0.15)',
            border: '1px solid rgba(245,158,11,0.4)', borderRadius: 8,
            padding: '10px 18px', fontSize: 14, color: '#FCD34D', fontWeight: 600,
          }}>
            All items delivered to real clients · Open for new projects
          </div>
        </div>
      </section>

      {/* ── Product Groups ────────────────────────────────────────────── */}
      {PRODUCT_GROUPS.map((group, gi) => (
        <section key={group.title} className={gi % 2 === 1 ? 'section section--soft' : 'section'}>
          <div className="container">
            <div style={{ marginBottom: 36 }}>
              <div className="eyebrow">Product group {String(gi + 1).padStart(2, '0')}</div>
              <h2 style={{ marginBottom: 8 }}>{group.title}</h2>
              <p style={{ maxWidth: 560, marginBottom: 0 }}>{group.sub}</p>
            </div>
            <style>{`
              .product-img-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
              @media (max-width: 1024px) { .product-img-grid { grid-template-columns: repeat(3, 1fr); } }
              @media (max-width: 640px) { .product-img-grid { grid-template-columns: repeat(2, 1fr); } }
            `}</style>
            <div className="product-img-grid">
              {group.items.map(item => (
                <div key={item.title} className="img-zoom" style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--line)' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '10px 12px', background: '#fff' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
    </div>
  );
}
