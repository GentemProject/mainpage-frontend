import React from 'react'
import styles from '../style.module.scss'
import Link from 'next/link'
function Col(props: any) {
  return (
    <div className={styles.containerColabor}>
      <div className={styles.colaborar}>
        <div className={styles.texto}>
          <span>{props.desc}</span>
        </div>
        <div className={styles.btnFl}>
          <Link href="/projects">
            <button
              className={styles.btnColab}
              style={{ background: props.colorBtn }}
            >
              <span>{props.btn}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Col
