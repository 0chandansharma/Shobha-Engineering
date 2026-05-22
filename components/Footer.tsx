import Link from 'next/link';

const CAPABILITIES = ['Heavy Steel Fabrication','Precision Machining','Sheet Metal Work','Industrial Structures','Custom Components','Pressure Vessels'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deep)', color: '#C7D2DF', paddingTop: 64 }}>
      <div className="container">
        <div style={{ display: 'grid', gap: 48, gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }} className="footer-grid">

          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/content/logos/shobha_logo.png"
                alt="Shobha Engineering Workshop"
                style={{ height: 72, width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#94A3B8', maxWidth: 320 }}>
              Lucknow-based manufacturers and fabricators of precision iron & steel components. Quality without compromise — since 1998.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {[
                { logo: '/content/images/social/linkedin.png',  href: 'https://www.linkedin.com/company/shobhaengineeringworkshop/', title: 'LinkedIn',  bg: '#0A66C2' },
                { logo: '/content/images/social/indiamart.png', href: 'https://www.indiamart.com/shobha-engg-workshop/',             title: 'IndiaMART', bg: '#fff' },
                { logo: '/content/images/social/facebook.svg',  href: 'https://www.facebook.com/people/Shobha-Engineering-Workshop/61590253234646/', title: 'Facebook', bg: '#1877F2' },
                { logo: '/content/images/social/whatsapp.svg',  href: 'https://wa.me/919415154200',                                  title: 'WhatsApp',  bg: 'transparent' },
              ].map(s => (
                <a key={s.title} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: s.bg,
                    border: s.bg === '#fff' ? '1px solid rgba(255,255,255,0.15)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: s.title === 'IndiaMART' ? 4 : 6,
                    textDecoration: 'none', flexShrink: 0,
                  }}>
                  <img src={s.logo} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </a>
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
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>📞</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <a href="tel:+919415154200" style={{ color: '#C7D2DF' }}>+91 94151 54200</a>
                  <a href="tel:+919455870703" style={{ color: '#C7D2DF' }}>+91 94558 70703</a>
                </div>
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
