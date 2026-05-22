'use server';

import { Resend } from 'resend';

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  files: { name: string; type: string; data: string }[];
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return { success: false, error: 'Email service not configured. Please call us directly at +91 94151 54200.' };
    }

    // Initialise inside the function so missing key doesn't crash at module load
    const resend = new Resend(apiKey);

    const { name, company, email, phone, service, message, files } = payload;

    const attachments = files
      .filter(f => f.data && f.data.length < 8_000_000) // skip files over ~6MB base64
      .map(f => ({ filename: f.name, content: f.data }));

    const { error } = await resend.emails.send({
      from: 'Shobha Engineering <onboarding@resend.dev>',
      to: 'csiitism@gmail.com',
      replyTo: email,
      subject: `Quote Request — ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:8px;">
          <div style="background:#0B4F8B;padding:20px 24px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Quote Request</h2>
            <p style="color:#C7D2DF;margin:6px 0 0;font-size:14px;">Shobha Engineering Workshop — Website Enquiry</p>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 0;color:#64748b;font-size:13px;width:130px;font-weight:600;">Name</td>
                <td style="padding:10px 0;color:#0f172a;font-size:14px;font-weight:700;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Company</td>
                <td style="padding:10px 0;color:#0f172a;font-size:14px;">${company || '—'}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#0B4F8B;">${email}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Phone</td>
                <td style="padding:10px 0;"><a href="tel:${phone}" style="color:#0B4F8B;">${phone}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:600;">Service</td>
                <td style="padding:10px 0;color:#0f172a;font-size:14px;">${service || 'Not specified'}</td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-bottom:20px;">
              <div style="font-size:13px;font-weight:600;color:#64748b;margin-bottom:8px;">Project Details</div>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:14px;color:#334155;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</div>
            </div>` : ''}
            ${files.length > 0 ? `
            <div style="margin-bottom:20px;">
              <div style="font-size:13px;font-weight:600;color:#64748b;margin-bottom:8px;">Attached Files (${files.length})</div>
              ${files.map(f => `<span style="display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;border-radius:4px;padding:4px 10px;margin:4px;font-size:13px;color:#1e40af;">📎 ${f.name}</span>`).join('')}
            </div>` : ''}
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;">
              <a href="mailto:${email}" style="background:#0B4F8B;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;display:inline-block;">Reply to ${name} →</a>
            </div>
          </div>
          <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px;">
            Shobha Engineering Workshop · 25 A Talkatora Rd, Alambagh, Lucknow UP 226004
          </p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send. Please call us at +91 94151 54200.' };
    }

    return { success: true };

  } catch (err) {
    console.error('sendContactEmail exception:', err);
    return { success: false, error: 'Something went wrong. Please call us at +91 94151 54200.' };
  }
}
