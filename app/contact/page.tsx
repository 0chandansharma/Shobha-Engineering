import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Request a Quote',
  description:
    'Get in touch with Shobha Engineering Workshop. Request a fabrication quote, share your drawings, or visit us at 25 A, Talkatora Rd, Alambagh, Lucknow. Call +91 94151 54200.',
};

const CONTACT_DETAILS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/>
      </svg>
    ),
    label: 'Workshop Address',
    value: '25 A, Talkatora Rd, Railway Colony\nAlambagh, Lucknow, UP 226004',
    href: undefined,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24a11.36 11.36 0 003.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 94151 54200',
    href: 'tel:+919415154200',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
      </svg>
    ),
    label: 'Email',
    value: 'csiitism@gmail.com',
    href: 'mailto:csiitism@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM\nSunday: Closed',
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="page-enter">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="section--deep" style={{ padding: 'clamp(40px,5vw,72px) 0' }}>
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1 style={{ maxWidth: 560, marginBottom: 16, color: '#fff' }}>
            Request a quote or get in touch.
          </h1>
          <p style={{ fontSize: 17, maxWidth: 520, color: '#C7D2DF' }}>
            Share your drawings, specifications, or a brief description — we will respond with a detailed quotation within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Layout ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <style>{`
            .contact-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: start; }
            @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; gap: 48px; } }
          `}</style>
          <div className="contact-layout">
            {/* ── Left: Details + Map ───────────────────────────────────── */}
            <div>
              <h2 style={{ marginBottom: 28 }}>Workshop details</h2>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                {CONTACT_DETAILS.map(d => (
                  <div key={d.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: 'var(--primary-light)', color: 'var(--primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {d.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{d.label}</div>
                      {d.href ? (
                        <a href={d.href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
                          {d.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: 15, color: 'var(--ink-2)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{d.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/919415154200?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20from%20Shobha%20Engineering%20Workshop."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#25D366', color: '#fff',
                  padding: '12px 22px', borderRadius: 6, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none', marginBottom: 32,
                  transition: 'background 0.15s',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              {/* Google Maps embed */}
              <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 16 }}>
                <iframe
                  src="https://maps.google.com/maps?q=25+A,+Talkatora+Rd,+Railway+Colony,+Alambagh,+Lucknow,+Uttar+Pradesh+226004&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shobha Engineering Workshop location"
                />
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=25+A,Talkatora+Rd,Alambagh,Lucknow,Uttar+Pradesh+226004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor"/>
                </svg>
                Get Directions
              </a>
            </div>

            {/* ── Right: Quote Form ─────────────────────────────────────── */}
            <div>
              <h2 style={{ marginBottom: 8 }}>Request a quote</h2>
              <p style={{ marginBottom: 28 }}>
                Fill in your details below. You can attach drawings or specifications — we accept PDF, DWG, DXF, DOC, JPG, and PNG files.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
