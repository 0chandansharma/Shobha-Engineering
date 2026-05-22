import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Shobha Engineering Workshop',
  description:
    'Founded in 1998 in Lucknow, Shobha Engineering Workshop has grown into a trusted fabrication partner for leading industrial corporations and enterprises across India. Learn our story.',
};

const PRINCIPLES = [
  {
    num: '01',
    title: 'Precision over shortcuts',
    desc: 'Every component is measured, checked, and verified before it leaves our workshop. We do not cut corners on tolerances.',
  },
  {
    num: '02',
    title: 'Honest partnerships',
    desc: 'We quote what we can deliver, and we deliver what we quote. No surprise costs, no scope creep, no excuses.',
  },
  {
    num: '03',
    title: 'Skilled people, modern tools',
    desc: 'Our team of 25+ experienced workmen operates calibrated machinery maintained to industry standards.',
  },
  {
    num: '04',
    title: 'Long-term thinking',
    desc: 'We have served clients for 10–15 years continuously. We build relationships, not just components.',
  },
];

const STATS = [
  { num: '25+', label: 'Years in operation', sub: 'Est. 1998, Lucknow' },
  { num: '500+', label: 'Projects delivered', sub: 'Across industries & sectors' },
  { num: '25+', label: 'Skilled workmen', sub: 'Scalable to 100+ for large jobs' },
  { num: '100+', label: 'Clients served', sub: 'Across industries & enterprises' },
];

function CTABanner() {
  return (
    <section style={{
      padding: 'clamp(56px,8vw,100px) 0',
      background: 'var(--primary)',
      backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.15)', color: '#FCD34D' }}>Work with us</div>
        <h2 style={{ color: '#fff', maxWidth: 560, margin: '0 auto 16px' }}>
          Ready to discuss your next project?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 36px' }}>
          Share your drawings or requirements and we will send you a detailed, no-obligation quotation.
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

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="section--deep section" style={{ paddingBottom: 'clamp(48px,6vw,80px)' }}>
        <div className="container">
          <div className="eyebrow">About us</div>
          <h1 style={{ maxWidth: 640, marginBottom: 20, color: '#fff' }}>
            Built on 25 years of hands-on engineering.
          </h1>
          <p style={{ fontSize: 18, maxWidth: 580, color: '#C7D2DF' }}>
            From a workshop in Alambagh, Lucknow, to a trusted fabrication partner for leading industrial corporations across India — this is the Shobha Engineering story.
          </p>
        </div>
      </section>

      {/* ── Founder Story ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <style>{`
            .about-story { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
            @media (max-width: 860px) { .about-story { grid-template-columns: 1fr; gap: 36px; } }
          `}</style>
          <div className="about-story">
            <div>
              <div className="eyebrow">Our story</div>
              <h2 style={{ marginBottom: 24 }}>From the workshop floor to your project site.</h2>
              <p>
                Shobha Engineering Workshop was founded in 1998 by a hands-on engineer who believed that quality fabrication did not need to come at a premium price — just honest work, calibrated tools, and skilled people.
              </p>
              <p>
                Starting from Alambagh, Lucknow, we built a reputation for delivering precision components across industries. Over the years, word spread — and our client base grew to span chemicals, breweries, manufacturing, construction, and more.
              </p>
              <p>
                Today, 25+ years on, we have a workforce of experienced fabricators, machinists, and site engineers — capable of handling everything from precision components to large structural fabrication projects. Our client list spans chemicals, breweries, manufacturing, construction, and dozens of enterprises across India.
              </p>
              <p>
                We are IIA members (ID: 35191), TIEIOA members, GST and MSME registered — and our work speaks for itself.
              </p>
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden' }} className="img-zoom">
              <img
                src="/content/images/projects/project-heavy-structure-nightwork-BEST.jpeg"
                alt="Heavy structure fabrication project at Shobha Engineering Workshop"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', display: 'block', height: 'clamp(280px, 40vh, 480px)', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Principles ─────────────────────────────────────────────── */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow">How we work</div>
            <h2>Our four core principles</h2>
          </div>
          <div className="grid grid-2">
            {PRINCIPLES.map(p => (
              <div key={p.num} className="card" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: 28, fontWeight: 800, color: 'var(--primary)',
                  opacity: 0.25, lineHeight: 1, flexShrink: 0, minWidth: 40,
                }}>
                  {p.num}
                </div>
                <div>
                  <h3 style={{ marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ marginBottom: 0, fontSize: 14 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow">By the numbers</div>
            <h2>Our track record</h2>
          </div>
          <div className="grid grid-4">
            {STATS.map(s => (
              <div key={s.num} style={{
                textAlign: 'center', background: 'var(--primary-light)',
                borderRadius: 12, padding: '32px 20px',
              }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--primary)', lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Memberships & Certifications ──────────────────────────────── */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow">Credentials</div>
            <h2>Memberships &amp; registrations</h2>
            <p style={{ maxWidth: 520, margin: '12px auto 0' }}>
              We are formally registered with industry bodies and national authorities — giving you assurance on compliance and quality.
            </p>
          </div>
          <style>{`
            .cert-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
            @media (max-width: 860px) { .cert-cards { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .cert-cards { grid-template-columns: 1fr; } }
          `}</style>
          <div className="cert-cards">
            {/* IIA Certificate Card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <a href="/content/images/certificates/certificate-IIA-member-35191.jpg" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }} className="img-zoom">
                  <img
                    src="/content/images/certificates/certificate-IIA-member-35191.jpg"
                    alt="IIA Member Certificate"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
              </a>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 0 }}>IIA Member</h3>
                </div>
                <p style={{ fontSize: 13, marginBottom: 4 }}>Indian Industries Association</p>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 0 }}>Member ID: 35191</p>
              </div>
            </div>

            {/* TIEIOA Certificate Card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <a href="/content/images/certificates/certificate-TIEIOA-member.jpg" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }} className="img-zoom">
                  <img
                    src="/content/images/certificates/certificate-TIEIOA-member.jpg"
                    alt="TIEIOA Member Certificate"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
              </a>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 0 }}>TIEIOA Member</h3>
                </div>
                <p style={{ fontSize: 13, marginBottom: 4 }}>Talkatora Industrial Estate Industries Owners Association</p>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 0 }}>Active member, Alambagh, Lucknow</p>
              </div>
            </div>

            {/* GST / MSME Card */}
            <div className="card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h3 style={{ fontSize: 16, marginBottom: 0 }}>GST Registered</h3>
                  </div>
                  <p style={{ fontSize: 13, marginBottom: 4 }}>GSTIN: 09AUTPS3751P1ZG</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 0 }}>Uttar Pradesh · Active</p>
                </div>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h3 style={{ fontSize: 16, marginBottom: 0 }}>MSME Registered</h3>
                  </div>
                  <p style={{ fontSize: 13, marginBottom: 4 }}>Udyam Certified</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 0 }}>Ministry of MSME, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
