import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const LIGHTS = [
  { color: '#FFD700', x: 10, y: 20 },
  { color: '#FF4444', x: 25, y: 8 },
  { color: '#4488FF', x: 40, y: 25 },
  { color: '#FFD700', x: 55, y: 5 },
  { color: '#FF4444', x: 70, y: 18 },
  { color: '#44FF88', x: 85, y: 10 },
  { color: '#FFD700', x: 95, y: 22 },
  { color: '#FF88CC', x: 15, y: 80 },
  { color: '#FFD700', x: 30, y: 90 },
  { color: '#4488FF', x: 50, y: 85 },
  { color: '#FF4444', x: 65, y: 92 },
  { color: '#FFD700', x: 80, y: 78 },
  { color: '#FF88CC', x: 90, y: 88 },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create sparkle particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        color: ['#D4AF37', '#F5E070', '#FF4444', '#4488FF', '#FF88CC'][Math.floor(Math.random() * 5)],
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.alpha = 0.2 + 0.8 * Math.abs(Math.sin(t * p.speed + p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Animated canvas bg */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Decorative string lights */}
      <div className={styles.stringTop}>
        {LIGHTS.slice(0, 7).map((l, i) => (
          <div key={i} className={styles.bulbWrap} style={{ left: `${l.x}%` }}>
            <div className={styles.wire} />
            <div
              className={styles.bulb}
              style={{ '--color': l.color, animationDelay: `${i * 0.3}s` }}
            />
          </div>
        ))}
      </div>

      <div className={styles.stringBottom}>
        {LIGHTS.slice(7).map((l, i) => (
          <div key={i} className={styles.bulbWrap} style={{ left: `${l.x}%` }}>
            <div
              className={styles.bulb}
              style={{ '--color': l.color, animationDelay: `${i * 0.25}s` }}
            />
            <div className={styles.wire} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.badge}>✦ Est. in Guna, Madhya Pradesh ✦</div>

        <h1 className={styles.title}>
          <span className={styles.line1}>Pankaj</span>
          <span className={styles.line2 + ' gold-text'}>Light</span>
          <span className={styles.line3}>Decoration</span>
        </h1>

        <p className={styles.tagline}>
          Illuminating Your Every Celebration With
          <em> Brilliance & Grace</em>
        </p>

        <div className={styles.stats}>
          {[
            { n: '500+', l: 'Events Lit' },
            { n: '15+', l: 'Years Experience' },
            { n: '50+', l: 'Design Styles' },
            { n: '100%', l: 'Client Satisfaction' },
          ].map((s) => (
            <div key={s.l} className={styles.stat}>
              <span className={styles.statNum}>{s.n}</span>
              <span className={styles.statLabel}>{s.l}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Book Decoration ✦
          </button>
          <button className="btn-outline" onClick={() => scrollTo('gallery')}>
            View Gallery
          </button>
        </div>
      </div>

      <div className={styles.scrollHint} onClick={() => scrollTo('services')}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
