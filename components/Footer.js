import styles from './Footer.module.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              <div>
                <div className={styles.logoMain}>GTA Light Decoration</div>
                <div className={styles.logoSub}>Illuminating Your Celebrations</div>
              </div>
            </div>
            <p className={styles.desc}>
              Trusted event lighting specialists based in Guna, M.P. Serving weddings, festivals, parties, and corporate events across central India.
            </p>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((l) => (
              <button key={l} className={styles.link} onClick={() => scrollTo(l.toLowerCase())}>
                {l}
              </button>
            ))}
          </div>

          <div>
            <h4 className={styles.colTitle}>Services</h4>
            {[
              'Wedding Decoration',
              'Birthday & Party',
              'Festival Lighting',
              'Corporate Events',
              'Engagement Decor',
            ].map((s) => (
              <div key={s} className={styles.serviceItem}>✦ {s}</div>
            ))}
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactItem}>📍 Jamner, Guna, M.P. – 473287</div>
            <div className={styles.contactItem}>📞 +91 96859 25241</div>
            <div className={styles.contactItem}>📧 arvind.saini30061976@gmail.com</div>
            <div className={styles.contactItem}>🕐 Mon–Sun: 9 AM – 9 PM</div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLine} />
          <div className={styles.bottomContent}>
            <p>© {new Date().getFullYear()} GTA Light Decoration. All rights reserved.</p>
            <p>Owner: <strong style={{ color: '#D4AF37' }}>Arvind Saini</strong> | Guna, Madhya Pradesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
