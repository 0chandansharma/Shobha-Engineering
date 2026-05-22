'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// eslint-disable-next-line @next/next/no-img-element

const links = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/services',   label: 'Services' },
  { href: '/products',   label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact',    label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change — use startTransition to avoid setState-in-effect warning
  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#fff',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(15,23,42,0.06)' : 'none',
      transition: 'box-shadow 0.2s, border-color 0.2s',
    }}>
      {/* Top bar */}
      <div style={{ background: 'var(--bg-deep)', color: '#C7D2DF', fontSize: 13 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 40px', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>📍 25 A, Talkatora Rd, Alambagh, Lucknow</span>
            <span className="hide-sm">🕒 Mon–Sat, 9 AM – 7 PM</span>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="tel:+919415154200" style={{ color: '#fff', fontWeight: 600 }}>+91 94151 54200</a>
            <a href="mailto:csiitism@gmail.com" style={{ color: '#C7D2DF' }} className="hide-sm">csiitism@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 40px', gap: 24 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src="/content/logos/shobha_logo.png"
            alt="Shobha Engineering Workshop"
            style={{ height: 54, width: 'auto', display: 'block' }}
          />
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '10px 14px', fontSize: 14.5, fontWeight: 600,
              color: pathname === l.href ? 'var(--primary)' : 'var(--ink-2)',
              textDecoration: 'none', position: 'relative',
              transition: 'color 0.15s',
            }}>
              {l.label}
              {pathname === l.href && (
                <span style={{ position: 'absolute', left: 14, right: 14, bottom: 2, height: 2, background: 'var(--primary)', borderRadius: 2 }} />
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginLeft: 12, padding: '10px 18px' }}>
            Request Quote →
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="burger" style={{ display: 'none', background: 'none', border: '1px solid var(--line)', width: 42, height: 42, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[0,1,2].map(i => <span key={i} style={{ height: 2, background: 'var(--ink)', display: 'block', transition: 'all 0.2s',
              transform: menuOpen ? (i===0?'rotate(45deg) translate(4px,4px)':i===2?'rotate(-45deg) translate(4px,-4px)':'none'):'none',
              opacity: menuOpen && i===1 ? 0 : 1,
            }} />)}
          </div>
        </button>
      </div>

      {menuOpen && (
        <div style={{ borderTop: '1px solid var(--line)', background: '#fff', padding: '12px 24px 20px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', padding: '14px 0', fontSize: 16, fontWeight: 600, color: pathname===l.href?'var(--primary)':'var(--ink)', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center', display: 'flex' }}>Request Quote →</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .burger { display: flex !important; } .hide-sm { display: none !important; } }
        @media (max-width: 768px) { header .container { padding: 14px 24px !important; } }
      `}</style>
    </header>
  );
}
