import Link from 'next/link';

const CAPABILITIES = ['Heavy Steel Fabrication','Precision Machining','Sheet Metal Work','Industrial Structures','Custom Components','Pressure Vessels'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deep)', color: '#C7D2DF', paddingTop: 64 }}>
      <div className="container">
        <div style={{ display: 'grid', gap: 48, gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }} className="footer-grid">

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--primary)', display: 'grid', placeItems: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ fontWeight: 800, fontSize: 17, color: '#fff', lineHeight: 1.1 }}>Shobha Engineering<br/>Workshop</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#94A3B8', maxWidth: 320 }}>
              Lucknow-based manufacturers and fabricators of precision iron & steel components. Quality without compromise — since 1998.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { label: 'LI', href: '#', title: 'LinkedIn' },
                { label: 'IM', href: '#', title: 'IndiaMART' },
                { label: 'WA', href: 'https://wa.me/919415154200', title: 'WhatsApp' },
              ].map(s => (
                <a key={s.label} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(255,255,255,0.06)', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, color: '#C7D2DF', letterSpacing: 0.4 }}>{s.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              {[['about','About Us'],['services','Services'],['products','Products'],['industries','Industries'],['contact','Contact']].map(([href, label]) => (
                <li key={href}><Link href={`/${href}`} style={{ color: '#C7D2DF' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>Capabilities</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              {CAPABILITIES.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>Reach Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.6 }}>
              <li style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>📍</span>
                <span>25 A, Talkatora Rd, Railway Colony<br/>Alambagh, Lucknow, UP 226004</span>
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--accent)' }}>📞</span>
                <a href="tel:+919415154200" style={{ color: '#C7D2DF' }}>+91 94151 54200</a>
              </li>
              <li style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--accent)' }}>✉</span>
                <a href="mailto:csiitism@gmail.com" style={{ color: '#C7D2DF', wordBreak: 'break-all' }}>csiitism@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 56, padding: '24px 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: '#64748B' }}>
          <div>© {new Date().getFullYear()} Shobha Engineering Workshop. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <span>GST: 09AUTPS3751P1ZG</span>
            <span>IIA Member ID: 35191</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
