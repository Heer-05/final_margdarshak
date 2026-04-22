import { useNavigate } from 'react-router-dom'
import styles from './AuthStyles.module.css'

export default function AuthNavButtons({ activePage }) {
  const navigate = useNavigate()

  return (
    <div className={styles.authNav}>
      <button
        type="button"
        className={`${styles.navBtn} ${activePage === 'signup' ? styles.navActive : styles.navGhost}`}
        onClick={() => navigate('/signup')}
      >
        SIGN UP
      </button>

      <button
        type="button"
        className={`${styles.navBtn} ${activePage === 'login' ? styles.navActive : styles.navGhost}`}
        onClick={() => navigate('/login')}
      >
        LOGIN
      </button>
    </div>
  )
}