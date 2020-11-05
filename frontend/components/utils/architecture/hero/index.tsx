import Link from 'next/link'
// Cambiar y aislar componente luego
import styles from '../../../specific/home/style.module.scss'

function Banner(props: string) {
  const { height, img, desc, button } = props
  return (
    <div
      className={styles.containerBanner}
      style={{
        height: height ? height : '500px',
        backgroundImage: `url(${img})`,
      }}
    >
      {/*<div className={styles.imgBannerI}></div> */}
      <div className={styles.content}>
        <div className={styles.text}>
          <span>{desc}</span>
        </div>
        {button && button !== '' && (
          <div className={styles.btnBanner}>
            <Link href="/projects">
              <a>
                <button className={styles.btnHome}>
                  <span>Ver todas las organizaciones</span>
                </button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Banner
