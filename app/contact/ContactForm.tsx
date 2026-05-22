'use client';
import { useState, useRef, FormEvent } from 'react';

const SERVICES = [
  'Heavy Steel Fabrication',
  'Precision Machining',
  'Sheet Metal Work',
  'Custom Engineered Components',
  'Industrial Structures & Erection',
  'Maintenance & AMC',
  'Other / Not sure yet',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [fileName, setFileName] = useState<string>('');
  const fileRef = useRef<HTMLInputElement>(null);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid var(--line)',
    borderRadius: 6,
    fontSize: 15,
    color: 'var(--ink)',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.15s',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: 'var(--ink)',
    marginBottom: 6,
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    // Simulate async submission (replace with actual API call)
    await new Promise(r => setTimeout(r, 1200));

    // On success:
    setFormState('success');
  }

  if (formState === 'success') {
    return (
      <div style={{
        background: '#F0FDF4', border: '1px solid #A7F3D0',
        borderRadius: 10, padding: '40px 32px', textAlign: 'center',
      }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ color: '#065F46', marginBottom: 10 }}>Request received!</h3>
        <p style={{ color: '#047857', marginBottom: 24 }}>
          Thank you for reaching out. We will review your request and get back to you within 24 hours.
        </p>
        <p style={{ fontSize: 14, color: '#059669' }}>
          For urgent requirements, call us directly: <a href="tel:+919415154200" style={{ color: '#059669', fontWeight: 700 }}>+91 94151 54200</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Row 1: Name + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="name">Full Name <span style={{ color: '#EF4444' }}>*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="company">Company / Organisation</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')}
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="email">Email Address <span style={{ color: '#EF4444' }}>*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 00000 00000"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')}
            />
          </div>
        </div>

        {/* Row 3: Service dropdown */}
        <div>
          <label style={labelStyle} htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
            onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={e => (e.target.style.borderColor = 'var(--line)')}
          >
            <option value="">Select a service...</option>
            {SERVICES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Row 4: Project details textarea */}
        <div>
          <label style={labelStyle} htmlFor="details">Project Details <span style={{ color: '#EF4444' }}>*</span></label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            placeholder="Describe your project — material, quantity, dimensions, tolerances, timeline, or any other relevant details."
            style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
            onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={e => (e.target.style.borderColor = 'var(--line)')}
          />
        </div>

        {/* Row 5: File attachment */}
        <div>
          <label style={labelStyle}>Attach Drawing or Document</label>
          <div
            onClick={() => fileRef.current?.click()}
            style={{
              border: '2px dashed var(--line)', borderRadius: 8,
              padding: '20px 24px', cursor: 'pointer', textAlign: 'center',
              transition: 'border-color 0.15s, background 0.15s',
              background: fileName ? 'var(--primary-light)' : 'var(--bg-soft)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
          >
            <input
              ref={fileRef}
              type="file"
              name="attachment"
              accept=".pdf,.dwg,.dxf,.doc,.docx,.jpg,.jpeg,.png"
              style={{ display: 'none' }}
              onChange={e => setFileName(e.target.files?.[0]?.name ?? '')}
            />
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
              {fileName ? (
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  Attached: {fileName}
                </span>
              ) : (
                <>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Click to upload</span> or drag and drop<br />
                  <span style={{ fontSize: 12 }}>PDF, DWG, DXF, DOC, JPG, PNG (max 10 MB)</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '15px 24px', fontSize: 16 }}
        >
          {formState === 'submitting' ? (
            <>
              <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              Sending...
            </>
          ) : (
            'Send Quote Request →'
          )}
        </button>

        <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginBottom: 0 }}>
          We respond within 24 hours on working days. For urgent needs, call +91 94151 54200.
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
}
