import styles from './footer.module.scss'
import Link from 'next/link'
function Footera() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.socialMedia}>
            <div>
              <a
                href="https://www.facebook.com/gentemorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.socialMediaIcon}
                  src="/fb.svg"
                  alt="facebook logo"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/gentem_org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.socialMediaIcon}
                  src="/insta.svg"
                  alt="instagram logo"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/gentem-org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.socialMediaIcon}
                  src="/linkedIn.svg"
                  alt="linkedin logo"
                />
              </a>
            </div>
          </div>
          <div className={styles.footerContact}>
            <span>
              ¿Tienes alguna duda? Contactanos en
              <span className="mail-color">
                <a href="mailto:hola@gentem.org"> hola@gentem.org</a>
              </span>
            </span>
          </div>

          {/* <div className='language'>
            <div>Castellano</div>
            <span className='circle'></span>
            <div className='activate'>Ingles</div>
            </div> */}
        </div>
        <div className={styles.additionals}>
          <div className={styles.option}>
            <Link href="/otros/politicas/privacidad">
              <a>
                <span>Terminos y condiciones</span>
              </a>
            </Link>
          </div>
          <div className={styles.option}>
            <Link href="/otros/politicas/cookies">
              <a>
                <span>Politicas de privacidad</span>
              </a>
            </Link>
          </div>
          <div className={styles.option}>
            <Link href="/otros/preguntas-frecuentes">
              <a>
                <span>Preguntas frecuentes</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footera
