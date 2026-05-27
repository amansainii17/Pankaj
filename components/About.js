import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Visual side */}
          <div className={styles.visual}>
            {/* Main mandala board — branded with "Pankaj Decorators – Arvind Saini" */}
            <div className={styles.mainImgWrap}>
              <img
                src="/images/w1-mandala-board.jpg"
                alt="Pankaj Decorators — Arvind Saini branded mandala board"
                className={styles.mainImg}
              />
              <div className={styles.imgBadge}>✦ Handcrafted by Arvind Saini ✦</div>
            </div>

            {/* Two smaller images side by side */}
            <div className={styles.twoCol}>
              <div className={styles.smallImgWrap}>
                <img
                  src="/images/w2-mandala-octagon.jpg"
                  alt="Octagon mosaic light panel"
                  className={styles.smallImg}
                />
              </div>
              <div className={styles.smallImgWrap}>
                <img
                  src="/images/g1-light-tunnel.jpg"
                  alt="Light tunnel decoration"
                  className={styles.smallImg}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className={styles.badge1}>
              <span className={styles.badgeNum}>15+</span>
              <span className={styles.badgeText}>Years of<br/>Excellence</span>
            </div>
            <div className={styles.badge2}>
              <span className={styles.badgeNum}>500+</span>
              <span className={styles.badgeText}>Happy<br/>Clients</span>
            </div>
          </div>

          {/* Content side */}
          <div className={styles.content}>
            <div className={styles.tag}>About Us</div>
            <h2 className={`${styles.title} gold-text`}>Pankaj Light<br/>Decoration</h2>
            <div className={styles.line} />

            <p className={styles.text}>
              Based in <strong>Jamner, Guna, Madhya Pradesh</strong>, Pankaj Light Decoration has been the most trusted name in event lighting for over 15 years. We bring dreams to life through the art of illumination.
            </p>
            <p className={styles.text}>
              From grand weddings at the heart of MP to vibrant Diwali streets, from intimate birthday parties to large corporate events — our skilled team handles every project with passion and precision.
            </p>
            <p className={styles.text}>
              Founded and operated by <strong style={{ color: '#D4AF37' }}>Arvind Saini</strong>, our philosophy is simple: every event deserves to shine. We combine traditional Indian decoration art — including our <em>handcrafted mirror mosaic mandala boards</em> (signed personally by Arvind Saini) — with modern LED and sound technology.
            </p>

            <div className={styles.values}>
              {[
                { icon: '⚡', text: 'On-time delivery, always' },
                { icon: '💎', text: 'Handcrafted premium decor' },
                { icon: '🤝', text: 'Transparent pricing' },
                { icon: '🌟', text: 'Custom design for every event' },
                { icon: '🔊', text: 'In-house sound system' },
                { icon: '⚙️', text: 'Own generators & power backup' },
              ].map((v) => (
                <div key={v.text} className={styles.value}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="tel:+919685925241" className="btn-primary">
                📞 Call Now
              </a>
              <a href="mailto:arvind.saini30061976@gmail.com" className="btn-outline">
                ✉ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
