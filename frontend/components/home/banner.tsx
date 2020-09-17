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
              Descubre las organizaciones que trabajan por un futuro mejor
            </span>
          </div>
          <div className={styles.btnBanner}>
            <Link href="/projects">
              <a>
                <button className={styles.btnHome}>
                  <span>Ver todas las organizaciones</span>
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
