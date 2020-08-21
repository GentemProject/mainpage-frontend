import React from 'react'
import Link from 'next/link'
import * as styles from '../../styles/home/home.module.scss'

function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.imgBannerI}></div>
      <div className={styles.contentBanner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span>
              Apoya a iniciaitivas sociales que estén en sintonía con tus
              creencias y valores
            </span>
          </div>
          <div className={styles.btnBanner}>
            <Link href="/projects">
              <a>
                <button className={styles.btnHome}>
                  <span>Ver todos los proyectos</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
