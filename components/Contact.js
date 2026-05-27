import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';

const services = [
  'Wedding Decoration',
  'Birthday & Party',
  'Festival Lighting',
  'Corporate Event',
  'Engagement / Reception',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', service: '', message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.service) {
      toast.error('Please fill in Name, Phone & Service');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Booking request sent! We will call you shortly.');
        setForm({ name: '', phone: '', email: '', date: '', service: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title gold-text">Book Your Decoration</h2>
        <div className="divider" />
        <p className="section-subtitle">Tell us about your event and we'll get in touch within 24 hours</p>

        <div className={styles.grid}>
          {/* Info panel */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>

            {[
              { icon: '📍', label: 'Address', value: 'House No. 0334, Jamner\nTehsil Makshudangarh\nDistrict Guna, M.P. – 473287' },
              { icon: '📞', label: 'Phone', value: '+91 96859 25241' },
              { icon: '📧', label: 'Email', value: 'arvind.saini30061976@gmail.com' },
              { icon: '🕐', label: 'Working Hours', value: 'Mon – Sun: 9:00 AM – 9:00 PM' },
            ].map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoValue} style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div className={styles.social}>
              <a href="https://wa.me/919685925241" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                💬 WhatsApp
              </a>
              <a href="tel:+919685925241" className={styles.socialBtn}>
                📞 Call Now
              </a>
            </div>

            <div className={styles.tagline}>
              ✦ Serving Guna, Ashok Nagar, Shivpuri & nearby districts ✦
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            <div className={styles.formInner}>
              <div className={styles.row2}>
                <div>
                  <label>Your Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                  />
                </div>
                <div>
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className={styles.row2}>
                <div>
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label>Event Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label>Type of Service *</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label>Message / Special Requirements</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your venue, expected guest count, any specific color theme or style you have in mind..."
                />
              </div>

              <button
                className={`btn-primary ${styles.submitBtn}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>⏳ Sending...</>
                ) : (
                  <>✦ Send Booking Request</>
                )}
              </button>

              <p className={styles.note}>
                We'll respond within 24 hours. Your information is safe and private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
