import styles from '../pages/LandingPage.module.css'

const LINKS = [
  { id: 'creators', label: 'CREATORS' },
  { id: 'home', label: 'HOME' },
  { id: 'about-us', label: 'ABOUT US' },
]

export default function Navbar({ activePage, onSignup, onLogin }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.brandBlock}>
        <div className={styles.logoCircle} aria-hidden="true">
          <img src="/margdarshak_logo.png" alt="Margdarshak" className={styles.navbarLogoImg} />
        </div>
      </div>

      <nav className={styles.navLinks} aria-label="Landing page navigation">
        {LINKS.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${styles.navLink} ${activePage === link.label ? styles.navLinkActive : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.navActions}>
        <button type="button" className={styles.ghostBtn} onClick={onSignup}>
          SIGN UP
        </button>
        <button type="button" className={styles.fillBtn} onClick={onLogin}>
          LOGIN
        </button>
      </div>
    </header>
  )
}