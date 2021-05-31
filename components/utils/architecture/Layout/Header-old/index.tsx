import Link from 'next/link'

// SVG
import Logo from '../../../../svg/Logo'
import Heart from '../../../../svg/heart'

// Styles
import styles from './header.module.scss'

function Headera() {
  return (
    <>
      <div className={`${styles.fixed}`}>
        <div className={`${styles.headerContent}`}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <Logo fill='white'/>
              </a>
            </Link>
          </div>
          <div>
            <a
              href="https://gentem.typeform.com/to/qN1hfz"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              <div className={styles.headerBtn}>
                <span className={styles.headerBtnText}>
                  Regístrate
                  <Heart />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headera
