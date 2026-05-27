// pages/api/contact.js
// Backend API route — runs on Vercel serverless functions

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, date, service, message } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({ message: 'Name, phone and service are required' });
  }

  const inquiry = {
    id: Date.now(),
    name,
    phone,
    email: email || 'N/A',
    eventDate: date || 'Not specified',
    service,
    message: message || 'No message',
    receivedAt: new Date().toISOString(),
  };

  console.log('📩 New Booking Inquiry:', JSON.stringify(inquiry, null, 2));

  // ── Send Email via Nodemailer ──
  try {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Owner — Arvind Saini
    await transporter.sendMail({
      from: `"Pankaj Light Decoration" <${process.env.SMTP_USER}>`,
      to: 'arvind.saini30061976@gmail.com',
      subject: `🌟 New Booking – ${service} | ${name} | ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0A0A0F; color: #F0EDE4; border: 1px solid #D4AF37;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #9A7B0A, #D4AF37); padding: 28px 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px; color: #0A0A0F; font-weight: 800; letter-spacing: 2px;">
              ✦ PANKAJ LIGHT DECORATION
            </h1>
            <p style="margin: 6px 0 0; font-size: 13px; color: #0A0A0F; opacity: 0.8;">New Booking Inquiry Received!</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">
            <h2 style="color: #D4AF37; font-size: 16px; border-bottom: 1px solid rgba(212,175,55,0.3); padding-bottom: 12px; margin-bottom: 24px;">
              📋 Customer Details
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px; width: 140px;">👤 Name</td>
                <td style="padding: 12px 0; color: #F0EDE4; font-weight: bold; font-size: 15px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px;">📞 Phone</td>
                <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; font-size: 16px;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px;">📧 Email</td>
                <td style="padding: 12px 0; color: #F0EDE4; font-size: 14px;">${email || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px;">📅 Event Date</td>
                <td style="padding: 12px 0; color: #F0EDE4; font-size: 14px;">${date || 'Not specified'}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px;">🎪 Service</td>
                <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; font-size: 14px;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #9A9580; font-size: 13px; vertical-align: top;">💬 Message</td>
                <td style="padding: 12px 0; color: #F0EDE4; font-size: 14px; line-height: 1.6;">${message || 'No additional message'}</td>
              </tr>
            </table>

            <!-- CTA -->
            <div style="margin-top: 28px; padding: 18px; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25); text-align: center;">
              <p style="margin: 0; color: #D4AF37; font-size: 14px; font-weight: bold;">📞 Call back karo: ${phone}</p>
              <p style="margin: 6px 0 0; color: rgba(240,237,228,0.5); font-size: 12px;">Customer ne booking request bheji hai — jaldi response dein!</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 16px 32px; border-top: 1px solid rgba(212,175,55,0.15); text-align: center;">
            <p style="margin: 0; color: rgba(240,237,228,0.3); font-size: 11px;">
              Pankaj Light Decoration • Jamner, Guna, M.P. • 9685925241<br/>
              Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </p>
          </div>
        </div>
      `,
    });

    // Auto-reply to customer (if they provided email)
    if (email && email !== 'N/A') {
      await transporter.sendMail({
        from: `"Pankaj Light Decoration" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `✦ Booking Confirmed – Pankaj Light Decoration`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0A0A0F; color: #F0EDE4; border: 1px solid #D4AF37;">
            <div style="background: linear-gradient(135deg, #9A7B0A, #D4AF37); padding: 28px 32px; text-align: center;">
              <h1 style="margin: 0; font-size: 20px; color: #0A0A0F; font-weight: 800;">✦ PANKAJ LIGHT DECORATION</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #0A0A0F;">Guna, Madhya Pradesh</p>
            </div>
            <div style="padding: 32px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 16px;">🌟</div>
              <h2 style="color: #D4AF37; font-size: 20px; margin-bottom: 12px;">Shukriya, ${name} ji!</h2>
              <p style="color: rgba(240,237,228,0.75); font-size: 14px; line-height: 1.7; margin-bottom: 20px;">
                Aapki booking request humein mil gayi hai.<br/>
                <strong style="color: #D4AF37;">${service}</strong> ke liye hum jald hi aapse sampark karenge.
              </p>
              <div style="background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25); padding: 18px; margin: 20px 0;">
                <p style="margin: 0; color: #D4AF37; font-size: 15px; font-weight: bold;">📞 9685925241</p>
                <p style="margin: 4px 0 0; color: rgba(240,237,228,0.5); font-size: 12px;">Arvind Saini — Pankaj Light Decoration</p>
              </div>
              <p style="color: rgba(240,237,228,0.4); font-size: 12px;">Jamner, Guna, M.P. – 473287</p>
            </div>
          </div>
        `,
      });
    }

    console.log('✅ Email sent successfully to arvind.saini30061976@gmail.com');

  } catch (emailError) {
    console.error('❌ Email sending failed:', emailError.message);
    // Form submit successful even if email fails
  }

  return res.status(200).json({
    success: true,
    message: 'Your booking request has been received. We will contact you shortly!',
    inquiryId: inquiry.id,
  });
}
