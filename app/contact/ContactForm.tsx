'use client';
import { useState, useRef, FormEvent } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';

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
  const [errorMsg, setErrorMsg] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px',
    border: '1px solid var(--line)', borderRadius: 6,
    fontSize: 15, color: 'var(--ink)', background: '#fff',
    outline: 'none', transition: 'border-color 0.15s', fontFamily: 'inherit',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6,
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const encodedFiles = await Promise.all(
      files.map(async f => ({
        name: f.name,
        type: f.type,
        data: await toBase64(f),
      }))
    );

    const result = await sendContactEmail({
      name:    data.get('name') as string,
      company: data.get('company') as string,
      email:   data.get('email') as string,
      phone:   data.get('phone') as string,
      service: data.get('service') as string,
      message: data.get('details') as string,
      files:   encodedFiles,
    });

    if (result.success) {
      setFormState('success');
    } else {
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div style={{ background: '#F0FDF4', border: '1px solid #A7F3D0', borderRadius: 10, padding: '40px 32px', textAlign: 'center' }}>
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
          For urgent needs, call: <a href="tel:+919415154200" style={{ color: '#059669', fontWeight: 700 }}>+91 94151 54200</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Name + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="name">Full Name <span style={{ color: '#EF4444' }}>*</span></label>
            <input id="name" name="name" type="text" required placeholder="Your name" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="company">Company / Organisation</label>
            <input id="company" name="company" type="text" placeholder="Your company" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')} />
          </div>
        </div>

        {/* Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="email">Email Address <span style={{ color: '#EF4444' }}>*</span></label>
            <input id="email" name="email" type="email" required placeholder="you@company.com" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
            <input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.target.style.borderColor = 'var(--line)')} />
          </div>
        </div>

        {/* Service */}
        <div>
          <label style={labelStyle} htmlFor="service">Service Required</label>
          <select id="service" name="service" style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
            onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={e => (e.target.style.borderColor = 'var(--line)')}>
            <option value="">Select a service...</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Project details */}
        <div>
          <label style={labelStyle} htmlFor="details">Project Details <span style={{ color: '#EF4444' }}>*</span></label>
          <textarea id="details" name="details" required rows={5}
            placeholder="Describe your project — material, quantity, dimensions, tolerances, timeline, or any other relevant details."
            style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
            onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
            onBlur={e => (e.target.style.borderColor = 'var(--line)')} />
        </div>

        {/* File attachment */}
        <div>
          <label style={labelStyle}>Attach Drawing or Document <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span></label>
          <div onClick={() => fileRef.current?.click()} style={{
            border: '2px dashed var(--line)', borderRadius: 8,
            padding: '20px 24px', cursor: 'pointer', textAlign: 'center',
            background: files.length > 0 ? 'var(--primary-light)' : 'var(--bg-soft)',
            transition: 'all 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}>
            <input ref={fileRef} type="file" name="attachment" multiple
              accept=".pdf,.dwg,.dxf,.doc,.docx,.jpg,.jpeg,.png" style={{ display: 'none' }}
              onChange={e => setFiles(Array.from(e.target.files ?? []))} />
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
              {files.length > 0 ? (
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  📎 {files.map(f => f.name).join(', ')}
                </span>
              ) : (
                <>
                  <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Click to upload</span> or drag and drop<br />
                  <span style={{ fontSize: 12 }}>PDF, DWG, DXF, DOC, JPG, PNG · Multiple files allowed</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Error message */}
        {formState === 'error' && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 6, padding: '12px 16px', color: '#B91C1C', fontSize: 14 }}>
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={formState === 'submitting'} className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '15px 24px', fontSize: 16 }}>
          {formState === 'submitting' ? (
            <>
              <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
              Sending...
            </>
          ) : 'Send Quote Request →'}
        </button>

        <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginBottom: 0 }}>
          We respond within 24 hours. For urgent needs, call <a href="tel:+919415154200" style={{ color: 'var(--primary)' }}>+91 94151 54200</a>
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}
