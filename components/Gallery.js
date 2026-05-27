import { useState } from 'react';
import styles from './Gallery.module.css';

const galleryItems = [
  {
    src: '/images/g1-light-tunnel.jpg',
    label: 'Magical Light Tunnel',
    cat: 'wedding',
    desc: 'Thousands of warm white LEDs forming a breathtaking walk-through entrance tunnel',
  },
  {
    src: '/images/g2-white-floral-stage.jpg',
    label: 'White Floral Wedding Stage',
    cat: 'wedding',
    desc: 'Lush green & white floral backdrop with cascading wisteria and LED path outline',
  },
  {
    src: '/images/g3-pink-mandap.jpg',
    label: 'Royal Pink Mandap',
    cat: 'wedding',
    desc: 'Grand ornate carved mandap illuminated in vibrant pink with fresh floral garlands',
  },
  {
    src: '/images/g4-outdoor-wedding.jpg',
    label: 'Outdoor White Reception',
    cat: 'wedding',
    desc: 'Elegant outdoor setup with white draping, crystal chandeliers & rose-lined walkway',
  },
  {
    src: '/images/g5-house-facade.jpg',
    label: 'Festival House Lighting',
    cat: 'festival',
    desc: 'Complete home facade adorned with curtain lights, colored flood beams & garden lights',
  },
  {
    src: '/images/g6-floral-arch.jpg',
    label: 'Floral Arch Stage',
    cat: 'wedding',
    desc: 'Romantic pink floral moon arch with tufted sofa and elegant pole candle arrangement',
  },
  {
    src: '/images/g7-green-reception.jpg',
    label: 'Lush Garden Reception',
    cat: 'wedding',
    desc: 'Fresh green garden-themed reception with hanging florals and neon LED path lighting',
  },
];

const workshopItems = [
  {
    src: '/images/w1-mandala-board.jpg',
    label: 'Signature Mandala Board',
    desc: 'Handcrafted circular mandala panel — signed by Arvind Saini, Pankaj Decorators',
  },
  {
    src: '/images/w2-mandala-octagon.jpg',
    label: 'Octagon Mosaic Panel',
    desc: 'Custom octagonal mirror mosaic light panel with multi-color wheel designs',
  },
  {
    src: '/images/w3-workshop-store.jpg',
    label: 'Decoration Store',
    desc: 'Our fully stocked decoration store with all lighting materials & supplies',
  },
  {
    src: '/images/w4-generator-room.jpg',
    label: 'Generator & Equipment',
    desc: 'Industrial-grade generators and wiring equipment for large event power supply',
  },
  {
    src: '/images/w5-generators.jpg',
    label: 'Power Generators',
    desc: 'Multiple generator units ensuring uninterrupted power at every event',
  },
  {
    src: '/images/w6-garage-setup.jpg',
    label: 'Equipment Garage',
    desc: 'Our dedicated equipment storage & preparation garage in Jamner, Guna',
  },
  {
    src: '/images/w7-amplifier-ahuja.jpg',
    label: 'Ahuja PA Amplifier',
    desc: 'Professional Ahuja solid-state PA amplifier system for event sound',
  },
  {
    src: '/images/w8-speaker-setup.jpg',
    label: 'Speaker & Sound System',
    desc: 'Heavy-duty speaker cabinets and sound mixing equipment for events',
  },
  {
    src: '/images/w9-wiring-store.jpg',
    label: 'Wiring & Cables',
    desc: 'Massive cable and wiring inventory — red, blue & green wire spools for all setups',
  },
  {
    src: '/images/w10-equipment-room.jpg',
    label: 'Main Equipment Room',
    desc: 'Our primary workshop room stocked with all decoration and sound equipment',
  },
  {
    src: '/images/w11-universal-amplifier.jpg',
    label: 'Universal Amplifiers',
    desc: 'Universal US-80W dual power source amplifier units for outdoor events',
  },
];

const cats = ['all', 'wedding', 'festival'];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [tab, setTab] = useState('gallery'); // 'gallery' | 'workshop'
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'all' ? galleryItems : galleryItems.filter((i) => i.cat === active);

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <h2 className="section-title gold-text">Our Work</h2>
        <div className="divider" />
        <p className="section-subtitle">Real photos from events & our workshop in Guna, M.P.</p>

        {/* Tab switcher */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'gallery' ? styles.activeTab : ''}`}
            onClick={() => setTab('gallery')}
          >
            ✨ Event Gallery
          </button>
          <button
            className={`${styles.tab} ${tab === 'workshop' ? styles.activeTab : ''}`}
            onClick={() => setTab('workshop')}
          >
            🔧 Our Workshop & Equipment
          </button>
        </div>

        {/* === EVENT GALLERY === */}
        {tab === 'gallery' && (
          <>
            <div className={styles.filters}>
              {cats.map((c) => (
                <button
                  key={c}
                  className={`${styles.filter} ${active === c ? styles.activeFilter : ''}`}
                  onClick={() => setActive(c)}
                >
                  {c === 'all' ? 'All Work' : c === 'wedding' ? '💒 Wedding' : '🪔 Festival'}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((item, i) => (
                <div
                  key={item.label}
                  className={styles.item}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onClick={() => setLightbox(item)}
                >
                  <div className={styles.imgWrap}>
                    <img src={item.src} alt={item.label} className={styles.img} />
                    <div className={styles.overlay}>
                      <span className={styles.zoomIcon}>🔍</span>
                      <p className={styles.overlayDesc}>{item.desc}</p>
                    </div>
                  </div>
                  <div className={styles.label}>
                    <span>{item.label}</span>
                    <span className={styles.catTag}>{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* === WORKSHOP GALLERY === */}
        {tab === 'workshop' && (
          <>
            <p className={styles.workshopIntro}>
              ✦ Behind every beautiful event is a world of hard work, craft & equipment. Here's a peek inside Pankaj Light Decoration's workshop.
            </p>
            <div className={`${styles.grid} ${styles.workshopGrid}`}>
              {workshopItems.map((item, i) => (
                <div
                  key={item.label}
                  className={styles.item}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  onClick={() => setLightbox(item)}
                >
                  <div className={styles.imgWrap}>
                    <img src={item.src} alt={item.label} className={styles.img} />
                    <div className={styles.overlay}>
                      <span className={styles.zoomIcon}>🔍</span>
                      <p className={styles.overlayDesc}>{item.desc}</p>
                    </div>
                  </div>
                  <div className={styles.label}>
                    <span>{item.label}</span>
                    <span className={styles.catTag} style={{ color: '#88CCFF', borderColor: 'rgba(136,204,255,0.3)', background: 'rgba(136,204,255,0.08)' }}>workshop</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.label} className={styles.lightboxImg} />
            <div className={styles.lightboxCaption}>
              <h3>{lightbox.label}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
