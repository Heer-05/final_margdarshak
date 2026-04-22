import Navbar from '../components/Navbar.jsx'
import HeroHeading from '../components/HeroHeading.jsx'
import CreatorCard from '../components/CreatorCard.jsx'
import AboutGrid from '../components/AboutGrid.jsx'
import styles from './LandingPage.module.css'

export default function LandingPage({ onLogin, onSignup }) {
  return (
    <main className={styles.page}>
      <section id="home" className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.navWrap}>
            <Navbar activePage="HOME" onSignup={onSignup} onLogin={onLogin} />
          </div>

          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <span className={styles.sectionLabel}>JOB-HUNTING PLATFORM</span>
              <HeroHeading />
              <div className={styles.heroGeminiWrap}>
                <img
                  src="/Gemini_Generated_Image_uetxbpuetxbpuetx-removebg-preview.png"
                  alt="Gemini generated visual"
                  className={styles.heroGeminiImage}
                />
              </div>
            </div>

            <aside className={styles.heroVisual} aria-hidden="true">
              <div className={styles.heroCard}>
                <div className={styles.heroCardTitle}>500+</div>
                <div className={styles.heroCardText}>skills mapped across career paths</div>
              </div>
              <div className={styles.heroStatRow}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>15</span>
                  <span className={styles.heroStatLabel}>skill groups</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>8</span>
                  <span className={styles.heroStatLabel}>analysis stages</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="creators" className={`${styles.section} ${styles.creatorsSection}`}>
        <video className={styles.creatorsBgVideo} autoPlay muted loop playsInline>
          <source src="/Cinematic_Resume_Pile_Video_Generation.mp4" type="video/mp4" />
        </video>
        <div className={styles.creatorsOverlay} />

        <div className={styles.sectionInner}>
          <div className={styles.navWrap}>
            <Navbar activePage="CREATORS" onSignup={onSignup} onLogin={onLogin} />
          </div>

          <div className={styles.creatorsContent}>
            <div>
              <span className={styles.sectionLabel}>THE TEAM</span>
              <h2 className={styles.sectionHeading}>CREATORS</h2>
              <p className={styles.sectionSub}>
                The people shaping Margdarshak into a focused career platform for resumes, roles, and next-step planning.
              </p>
            </div>

            <div className={styles.creatorRow}>
              <CreatorCard name="Parv Gupta" image="/parv.jpeg" role="AIML + Research" />
              <CreatorCard name="Harshita Singh" image="/professional%20photo.jpeg" role="AIML + App" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.navWrap}>
            <Navbar activePage="ABOUT US" onSignup={onSignup} onLogin={onLogin} />
          </div>

          <div className={styles.aboutContent}>
            <div>
              <span className={styles.sectionLabel}>ABOUT THE PLATFORM</span>
              <h2 className={styles.sectionHeading}>ABOUT US</h2>
              <p className={styles.sectionSub}>
                Margdarshak turns a resume into structured guidance with skills, role matching, gaps, and recommendations.
              </p>
            </div>

            <AboutGrid />
          </div>
        </div>
      </section>
    </main>
  )
}