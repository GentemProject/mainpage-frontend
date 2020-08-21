import Link from 'next/link'

// SVG
import Logo from './svg/Logo'
import Heart from './svg/heart'

// Styles
import * as styles from '../styles/header.module.scss'

function Header() {
  return (
    <>
      <div className={`${styles.layoutCenter} ${styles.fixed}`}>
        <div className={`${styles.headerContent} ${styles.layout}`}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <Logo />
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
                  Únete a gentem
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

export default Header
