import type { Metadata } from 'next';
import Link from 'next/link';
import VideoCarousel from '@/components/VideoCarousel';

export const metadata: Metadata = {
  title: 'Iron & Steel Fabricators, Lucknow — Since 1998',
  description:
    'Shobha Engineering Workshop — Lucknow-based manufacturers and fabricators of iron & steel components. Trusted by Indian Railways, RDSO, and leading corporates. Heavy fabrication, precision machining, pressure vessels. Call +91 94151 54200.',
};

const CLIENTS = [
  'Indian Railways',
  'RDSO Lucknow',
  'Northern Railways',
  'India Pesticides Ltd',
  'Swarup Chemical',
  'Mohan Goldwater Breweries',
  'Aerolley Technologies',
  'Katerra India',
  'Galvano India',
  'Anand Buildtech',
  'PN International',
  'PTC PVT LTD',
  'Prag Polymers',
];

const CAPABILITIES = [
  { icon: '⚙️', title: 'Precision Machining', desc: 'CNC & conventional turning, milling, boring, and grinding to tight tolerances for critical components.' },
  { icon: '🏗️', title: 'Heavy Fabrication', desc: 'Large structural steel assemblies, frames, and skids for industrial and infrastructure projects.' },
  { icon: '🔧', title: 'Custom Engineering', desc: 'Design-to-delivery of non-standard components — we work from drawings, sketches, or samples.' },
  { icon: '📐', title: 'Sheet Metal Work', desc: 'Precision cutting, bending, rolling, and forming of mild steel, stainless steel, and alloy sheets.' },
  { icon: '🏚️', title: 'Site Erection', desc: 'On-site installation and erection of fabricated structures, piping, and equipment skids.' },
  { icon: '📋', title: 'Maintenance Contracts', desc: 'Annual maintenance contracts (AMC) for industrial equipment, machinery, and plant structures.' },
];

const WHY_US = [
  { title: 'Verified accuracy', desc: 'High-precision measuring instruments and quality checks at every stage.' },
  { title: 'Skilled workforce', desc: '25+ experienced workmen — scalable to 100+ for large projects.' },
  { title: 'On-time delivery', desc: 'Structured workflow and project tracking ensure deadlines are met.' },
  { title: 'Honest pricing', desc: 'Transparent quotations with no hidden charges. Fair for both parties.' },
];

const PROJECT_CARDS = [
  {
    title: 'Heavy Fabrication',
    sub: 'Large structural steel assembly',
    year: '2023',
    img: '/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg',
  },
  {
    title: 'Industrial Piping',
    sub: 'Large-diameter pipe bends',
    year: '2022',
    img: '/content/images/projects/project-pipe-elbows-batch-delivery.webp',
  },
  {
    title: 'Process Equipment',
    sub: 'Pressure vessel & pump skid',
    year: '2022',
    img: '/content/images/products/product-pressure-vessel-pump-skid-01.jpeg',
  },
  {
    title: 'Government',
    sub: 'SS/MS water tanker for Gram Panchayat',
    year: '2021',
    img: '/content/images/products/product-water-tanker-gramPanchayat-client.png',
  },
];

const GALLERY_IMAGES = [
  { src: '/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg', span2: true, alt: 'Heavy structure fabrication night work' },
  { src: '/content/images/products/product-pressure-vessel-pump-skid-01.jpeg', span2: false, alt: 'Pressure vessel and pump skid' },
  { src: '/content/images/process/process-welding-pipes-worker.jpeg', span2: false, alt: 'Worker welding pipes' },
  { src: '/content/images/products/product-large-pipe-elbow-fabricated.webp', span2: false, alt: 'Large pipe elbow fabricated' },
  { src: '/content/images/projects/project-pipe-elbows-batch-delivery.webp', span2: false, alt: 'Pipe elbows batch delivery' },
  { src: '/content/images/products/product-pump-control-panel-assembly.jpeg', span2: false, alt: 'Pump control panel assembly' },
  { src: '/content/images/stock-pexels/stock-welding-grinding-sparks-wide-HERO.jpg', span2: true, alt: 'Welding and grinding sparks' },
  { src: '/content/images/machinery/machinery-lathe-in-operation.jpeg', span2: false, alt: 'Lathe in operation' },
  { src: '/content/images/stock-pexels/stock-welding-hardhat-sparks.jpg', span2: false, alt: 'Welding with hardhat and sparks' },
  { src: '/content/images/projects/project-vessel-team-lifting.webp', span2: false, alt: 'Team lifting pressure vessel' },
  { src: '/content/images/stock-pexels/stock-crane-lifting-large-tanks-india.jpg', span2: false, alt: 'Crane lifting large tanks' },
  { src: '/content/images/products/product-heat-exchanger-filter-housing.webp', span2: false, alt: 'Heat exchanger filter housing' },
];

const PRODUCT_PREVIEWS = [
  { title: 'Pressure Vessels', sub: 'ASME / IS-2825 fabricated vessels', img: '/content/images/products/product-pressure-vessels-multiple.webp' },
  { title: 'Pipe Elbows & Bends', sub: 'Large-dia, custom-angle bends', img: '/content/images/products/product-large-pipe-elbow-fabricated.webp' },
  { title: 'Heat Exchangers', sub: 'Shell & tube, filter housings', img: '/content/images/products/product-heat-exchanger-filter-housing.webp' },
  { title: 'Water Tankers', sub: 'SS/MS for govt & industrial use', img: '/content/images/products/product-water-tanker-gramPanchayat-client.png' },
];

const CAROUSEL_VIDEOS = [
  { src: '/content/videos/compressed/workshop-video-01.mp4',                  label: 'Workshop Operations',    sub: 'Live footage from our Lucknow facility', poster: '/content/images/workshop/workshop-floor-wide-BEST.jpeg' },
  { src: '/content/videos/compressed/workshop-video-03.mp4',                  label: 'Fabrication in Progress', sub: 'Heavy steel work on the floor',          poster: '/content/images/products/product-pressure-vessel-pump-skid-01.jpeg' },
  { src: '/content/videos/compressed/stock-video-01.mp4', label: 'Industrial Manufacturing', sub: 'Precision fabrication processes',        poster: '/content/images/stock-pexels/stock-welding-arc-blue-portrait-01.jpg' },
  { src: '/content/videos/compressed/stock-video-02.mp4', label: 'Steel Processing',         sub: 'Cutting, forming, and assembly',         poster: '/content/images/stock-pexels/stock-welding-structural-steel-shed.jpg' },
  { src: '/content/videos/compressed/stock-video-03.mp4', label: 'Workshop Processes',       sub: 'End-to-end fabrication workflow',         poster: '/content/images/stock-pexels/stock-drilling-milling-closeup.jpg' },
  { src: '/content/videos/compressed/stock-video-04.mp4', label: 'Quality Work',             sub: 'Skilled workmanship on every job',        poster: '/content/images/stock-pexels/stock-grinding-sparks-closeup.jpg' },
  { src: '/content/videos/compressed/workshop-video-02.mp4',                  label: 'Our Team at Work',         sub: 'Experienced fabricators and machinists',  poster: '/content/images/process/process-welding-pipes-worker.jpeg' },
];

const CERT_ITEMS = [
  { title: 'IIA Member', sub: 'Member ID 35191', detail: 'Indian Industries Association' },
  { title: 'TIEIOA Member', sub: 'Talkatora Industrial Estate Owners Assoc.', detail: '' },
  { title: 'GST Registered', sub: '09AUTPS3751P1ZG', detail: 'Govt. Tax Verified' },
  { title: 'MSME Registered', sub: 'Udyam Certified', detail: 'Ministry of MSME, Govt of India' },
  { title: '100+ Clients Served', sub: 'Railways · Corporate · Govt · SMEs', detail: 'Across India' },
  { title: 'Est. 1998', sub: '25+ years · Lucknow UP', detail: 'Family-led · Quality first' },
];

function CTABanner() {
  return (
    <section style={{
      padding: 'clamp(56px, 8vw, 100px) 0',
      background: 'var(--primary)',
      backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FCD34D' }}>Ready to start?</div>
        <h2 style={{ color: '#fff', maxWidth: 560, margin: '0 auto 16px' }}>
          Tell us about your project. We will get back within 24 hours.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 36px' }}>
          Share your drawings, specifications, or a rough idea — we will review and send you a no-obligation quote.
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

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="blueprint-bg" style={{ padding: 'clamp(32px,4vw,56px) 0 clamp(40px,5vw,72px)' }}>
        <div className="container">
          <style>{`
            .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
            @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 36px; } }
          `}</style>
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Iron &amp; Steel Fabricators · Since 1998</div>
              <h1 style={{ marginBottom: 20 }}>
                Engineered with <span style={{ color: 'var(--primary)' }}>precision.</span>
                <br />Built to last decades.
              </h1>
              <p style={{ fontSize: 18, maxWidth: 500, marginBottom: 32, color: 'var(--ink-2)' }}>
                Lucknow-based manufacturers and fabricators of iron and steel components — trusted by Indian Railways, RDSO, and leading corporates across India.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                <Link href="/contact" className="btn btn-primary">Request a Quote →</Link>
                <Link href="/products" className="btn btn-ghost">View Our Work</Link>
              </div>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 28, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[
                  { num: '25+', label: 'Years' },
                  { num: '500+', label: 'Projects' },
                  { num: 'ISO', label: 'Quality' },
                ].map(s => (
                  <div key={s.num}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', background: '#0B1F3A' }}>
                <video
                  autoPlay muted loop playsInline
                  poster="/content/images/stock-pexels/stock-welding-arc-blue-portrait-01.jpg"
                  style={{
                    width: '100%', display: 'block',
                    height: 'clamp(320px, 50vh, 520px)',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/content/videos/compressed/hero.mp4" type="video/mp4" />
                </video>
              </div>
              <div style={{
                position: 'absolute', bottom: 20, left: -20,
                background: '#fff', borderRadius: 10, padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
                display: 'flex', alignItems: 'center', gap: 12,
                maxWidth: 240,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>Quality Verified</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>High-precision measuring instruments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logo Strip ─────────────────────────────────────────── */}
      <section className="section--soft" style={{ padding: '48px 0' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 28 }}>
            Trusted vendor for leading corporates, railways &amp; government bodies
          </p>
          <style>{`
            .client-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; }
            @media (max-width: 900px) { .client-grid { grid-template-columns: repeat(4, 1fr); } }
            @media (max-width: 560px) { .client-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
          <div className="client-grid">
            {CLIENTS.map(c => (
              <div key={c} style={{
                border: '1px solid var(--line)', borderRadius: 8,
                padding: '12px 10px', textAlign: 'center',
                fontSize: 12, fontWeight: 600, color: 'var(--ink-2)',
                background: '#fff', lineHeight: 1.3,
              }}>
                {c}
              </div>
            ))}
            <div style={{
              border: '2px dashed var(--line)', borderRadius: 8,
              padding: '12px 10px', textAlign: 'center',
              fontSize: 12, fontWeight: 600, color: 'var(--muted)',
              lineHeight: 1.3,
            }}>
              &amp; Many<br />More
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', marginTop: 20 }}>
            Including many small &amp; medium enterprises across Uttar Pradesh and India
          </p>
        </div>
      </section>

      {/* ── Track Record ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <style>{`
            .track-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
            .projects-2x2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            @media (max-width: 900px) { .track-grid { grid-template-columns: 1fr; gap: 40px; } }
            @media (max-width: 480px) { .projects-2x2 { grid-template-columns: 1fr; } }
          `}</style>
          <div className="track-grid">
            <div>
              <div className="eyebrow">Over two decades of delivery</div>
              <h2 style={{ marginBottom: 24 }}>25 years on the floor. Hundreds of projects delivered.</h2>
              <p style={{ marginBottom: 40 }}>
                Founded in 1998, Shobha Engineering Workshop has grown from a small Lucknow workshop to a trusted fabrication partner for India&apos;s top railways, government bodies, and industrial corporations.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { num: '25+', label: 'Years in business' },
                  { num: '500+', label: 'Projects delivered' },
                  { num: '25+', label: 'Skilled workmen' },
                  { num: 'Govt.', label: 'Approved vendor' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--primary-light)', borderRadius: 10, padding: '20px 22px' }}>
                    <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="projects-2x2">
              {PROJECT_CARDS.map((p, i) => (
                <div key={p.title} style={{
                  borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)',
                  transform: i % 2 === 1 ? 'translateY(24px)' : 'none',
                  background: '#fff',
                }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>{p.sub}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>{p.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Section ─────────────────────────────────────────────── */}
      <section className="section--deep" style={{ padding: 'clamp(56px,8vw,100px) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="eyebrow">Workshop in action</div>
            <h2 style={{ marginBottom: 14 }}>See how we work</h2>
            <p style={{ maxWidth: 540, margin: '0 auto', color: '#C7D2DF' }}>
              A real look inside our Lucknow facility — welding, fabrication, machining, and delivery in action.
            </p>
          </div>
          <VideoCarousel videos={CAROUSEL_VIDEOS} />
        </div>
      </section>

      {/* ── Capabilities Grid ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow">What we do</div>
            <h2>Core capabilities</h2>
            <p style={{ maxWidth: 520, margin: '12px auto 0' }}>
              From raw steel to finished component — we handle the full fabrication cycle in-house.
            </p>
          </div>
          <div className="grid grid-3">
            {CAPABILITIES.map(c => (
              <div key={c.title} className="card">
                <div style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 18,
                }}>
                  {c.icon}
                </div>
                <h3 style={{ marginBottom: 10 }}>{c.title}</h3>
                <p style={{ marginBottom: 0, fontSize: 14 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/services" className="btn btn-ghost">See all services →</Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────────────── */}
      <section className="section section--soft">
        <div className="container">
          <style>{`
            .whyus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
            @media (max-width: 860px) { .whyus-grid { grid-template-columns: 1fr; gap: 36px; } }
          `}</style>
          <div className="whyus-grid">
            <div>
              <div className="eyebrow">Why choose us</div>
              <h2 style={{ marginBottom: 32 }}>Quality, skill, and integrity — in every job.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {WHY_US.map(w => (
                  <div key={w.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{w.title}</div>
                      <p style={{ marginBottom: 0, fontSize: 14 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo mosaic — fixed container height, both columns fill it */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, height: 'clamp(360px, 48vh, 500px)' }}>
              <div style={{ borderRadius: 10, overflow: 'hidden' }} className="img-zoom">
                <img src="/content/images/workshop/workshop-floor-wide-BEST.jpeg" alt="Workshop floor"
                  loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 32 }}>
                <div style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }} className="img-zoom">
                  <img src="/content/images/stock-pexels/stock-welding-ibeam-professional-facility.jpg" alt="Welding I-beam"
                    loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }} className="img-zoom">
                  <img src="/content/images/stock-pexels/stock-quality-inspection-vernier-caliper-FILLS-GAP.jpg" alt="Quality inspection"
                    loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="eyebrow">Our work</div>
            <h2>From the workshop floor</h2>
          </div>
          <style>{`
            .masonry-gallery {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-auto-rows: 220px;
              gap: 12px;
            }
            @media (max-width: 900px) {
              .masonry-gallery { grid-template-columns: repeat(2, 1fr); }
              .masonry-span2 { grid-column: span 1 !important; }
            }
            @media (max-width: 480px) { .masonry-gallery { grid-template-columns: 1fr; } }
          `}</style>
          <div className="masonry-gallery">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`img-zoom${img.span2 ? ' masonry-span2' : ''}`}
                style={{
                  gridColumn: img.span2 ? 'span 2' : 'span 1',
                  borderRadius: 10, overflow: 'hidden',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Preview ──────────────────────────────────────────── */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <div className="eyebrow">Products</div>
            <h2>What we manufacture</h2>
            <p style={{ maxWidth: 480, margin: '12px auto 0', fontSize: 14, color: 'var(--muted)' }}>
              Delivered to clients · Available for new orders
            </p>
          </div>
          <div style={{ marginTop: 36 }} className="grid grid-4">
            {PRODUCT_PREVIEWS.map(p => (
              <div key={p.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }} className="img-zoom">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <h3 style={{ fontSize: 17, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, marginBottom: 0 }}>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/products" className="btn btn-ghost">View all products →</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial + Certifications ─────────────────────────────── */}
      <section className="section section--deep">
        <div className="container">
          <style>{`
            .cert-outer { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
            .cert-items { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            @media (max-width: 860px) { .cert-outer { grid-template-columns: 1fr; gap: 40px; } }
            @media (max-width: 480px) { .cert-items { grid-template-columns: 1fr; } }
          `}</style>
          <div className="cert-outer">
            <div>
              <div className="eyebrow">Client trust</div>
              <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: 24, marginTop: 24, marginBottom: 36 }}>
                <p style={{ fontSize: 20, lineHeight: 1.6, fontStyle: 'italic', color: '#E2E8F0', marginBottom: 20 }}>
                  &ldquo;Shobha Engineering has been our go-to fabricator for over a decade. Their attention to tolerances, on-time delivery, and honest communication make them stand out from other vendors we have worked with.&rdquo;
                </p>
                <footer style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', background: 'var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 18, color: '#fff', flexShrink: 0,
                  }}>
                    PM
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>Procurement Manager</div>
                    <div style={{ fontSize: 13, color: '#94A3B8' }}>Industrial Chemicals Company, Lucknow</div>
                  </div>
                </footer>
              </blockquote>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="/content/images/certificates/certificate-IIA-member-35191.jpg" target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 8, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.15)', width: 110 }}>
                  <img src="/content/images/certificates/certificate-IIA-member-35191.jpg" alt="IIA Member Certificate" loading="lazy" decoding="async" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }} />
                </a>
                <a href="/content/images/certificates/certificate-TIEIOA-member.jpg" target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 8, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.15)', width: 110 }}>
                  <img src="/content/images/certificates/certificate-TIEIOA-member.jpg" alt="TIEIOA Member Certificate" loading="lazy" decoding="async" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }} />
                </a>
              </div>
            </div>
            <div>
              <div className="eyebrow">Verified credentials</div>
              <h3 style={{ color: '#fff', marginBottom: 24, marginTop: 8 }}>Registered, certified &amp; compliant</h3>
              <div className="cert-items">
                {CERT_ITEMS.map(c => (
                  <div key={c.title} style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, padding: '16px 18px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>{c.title}</div>
                    </div>
                    <div style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.4 }}>{c.sub}</div>
                    {c.detail && <div style={{ fontSize: 11, color: '#64748B', marginTop: 4 }}>{c.detail}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
