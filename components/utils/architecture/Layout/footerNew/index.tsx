import styles from './style.module.scss'
import LinkButton from 'components/utils/interactive/inputs/link'
import Link from 'next/link'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  Heart,
} from 'components/svg'
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <LinkButton
          href="/"
          className="simple"
          label="Preguntas frecuentes"
          size="m"
          color={{ color: '#888888' }}
        />
        <LinkButton
          href="/"
          className="simple"
          label="Politica de privacidad"
          size="m"
          color={{ color: '#888888' }}
        />
        <LinkButton
          href="/"
          className="simple"
          label="Terminos y condiciones"
          size="m"
          color={{ color: '#888888' }}
        />
      </div>
      <div className={styles.social}>
        <div className={styles.icons}>
          <Link href="">
            <div className={styles.i}>
              <FacebookIcon />
            </div>
          </Link>
          <Link href="">
            <div className={styles.i}>
              <TwitterIcon />
            </div>
          </Link>
          <Link href="">
            <div className={styles.i}>
              <InstagramIcon />
            </div>
          </Link>
          <Link href="">
            <div className={styles.i}>
              <LinkedinIcon />
            </div>
          </Link>
        </div>
        <div className={styles.gratitude}>
          <span>Hecho con </span>
          <Heart />
          <span> por el equipo de gentem</span>
        </div>
      </div>
    </div>
  )
}
export default Footer
