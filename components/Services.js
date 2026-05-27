import styles from './Services.module.css';

const services = [
  {
    icon: '💒',
    title: 'Wedding Decoration',
    desc: 'Exquisite fairy lights, floral arches, mandap illumination, and entrance gates that make your wedding night truly magical.',
    items: ['Mandap Lighting', 'Entrance Gate', 'Stage Backdrop', 'Canopy Lights'],
  },
  {
    icon: '🎉',
    title: 'Birthday & Party',
    desc: 'Vibrant LED balloon setups, themed lighting arrangements, and colorful string lights for every age and occasion.',
    items: ['LED Balloon Walls', 'Neon Signs', 'Fairy Lights', 'Centerpieces'],
  },
  {
    icon: '🪔',
    title: 'Festival Lighting',
    desc: 'Diwali, Navratri, Ganesh Puja, Eid—transform your home and street with brilliant festive light arrangements.',
    items: ['Diwali Decor', 'Temple Lighting', 'Street Decor', 'Rooftop Lights'],
  },
  {
    icon: '🏢',
    title: 'Commercial & Corporate',
    desc: 'Showrooms, hotels, malls, and offices. Professional grade LED installations for any scale of business.',
    items: ['Facade Lighting', 'Indoor Ambiance', 'Signage Lights', 'Permanent Setup'],
  },
  {
    icon: '🎓',
    title: 'Graduation & Events',
    desc: 'Conferences, seminars, cultural events—stage lighting, spot setups, and decorative arrangements done with precision.',
    items: ['Stage Lighting', 'DJ Setups', 'Backdrop Decor', 'Canopy Draping'],
  },
  {
    icon: '🌸',
    title: 'Engagement & Reception',
    desc: 'Romantic intimate settings with warm Edison bulbs, floral lighting, and personalized name installations.',
    items: ['Name Letters', 'Floral Arch', 'Edison Bulbs', 'Photo Booth'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title gold-text">Our Services</h2>
        <div className="divider" />
        <p className="section-subtitle">From intimate gatherings to grand celebrations — we illuminate every moment</p>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} card`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{s.icon}</span>
                <div className={styles.glow} />
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.items}>
                {s.items.map((item) => (
                  <li key={item}>
                    <span className={styles.dot}>✦</span> {item}
                  </li>
                ))}
              </ul>
              <div className={styles.corner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
