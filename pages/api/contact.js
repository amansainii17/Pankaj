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

  // ── Option 1: Save to a file/database (demo — logs to Vercel logs) ──
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

  // ── Option 2: Send email via nodemailer (requires env vars) ──
  // Uncomment and set SMTP_HOST, SMTP_USER, SMTP_PASS in Vercel environment variables
  /*
  try {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Pankaj Light Decoration Website" <${process.env.SMTP_USER}>`,
      to: 'arvind.saini30061976@gmail.com',
      subject: `✦ New Booking Inquiry – ${service} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; background: #0A0A0F; color: #F0EDE4; padding: 40px;">
          <h2 style="color: #D4AF37; border-bottom: 1px solid #D4AF37; padding-bottom: 12px;">New Booking Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #9A9580; width: 160px;">Customer Name</td><td style="color: #F0EDE4; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #9A9580;">Phone</td><td style="color: #D4AF37;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; color: #9A9580;">Email</td><td>${email || 'N/A'}</td></tr>
            <tr><td style="padding: 10px 0; color: #9A9580;">Event Date</td><td>${date || 'Not specified'}</td></tr>
            <tr><td style="padding: 10px 0; color: #9A9580;">Service</td><td style="color: #D4AF37; font-weight: bold;">${service}</td></tr>
            <tr><td style="padding: 10px 0; color: #9A9580; vertical-align: top;">Message</td><td>${message || 'No additional message'}</td></tr>
          </table>
          <p style="color: #9A9580; font-size: 12px; margin-top: 30px; border-top: 1px solid #1A1A26; padding-top: 16px;">
            Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error('Email sending failed:', emailError.message);
    // Don't return error to user — inquiry is still logged
  }
  */

  return res.status(200).json({
    success: true,
    message: 'Your booking request has been received. We will contact you shortly!',
    inquiryId: inquiry.id,
  });
}
