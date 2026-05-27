import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = ['Home', 'Services', 'Gallery', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => handleNav('home')}>
          <span className={styles.logoIcon}>✦</span>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Pankaj</span>
            <span className={styles.logoSub}>Light Decoration</span>
          </div>
        </div>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => handleNav(link)}>{link}</button>
            </li>
          ))}
          <li>
            <button className={styles.ctaBtn} onClick={() => handleNav('contact')}>
              Book Now
            </button>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.active : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
