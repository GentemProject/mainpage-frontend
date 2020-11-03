import React from 'react'
import Heart from '../../../svg/heart'
import styles from '../style.module.scss'
function Cont() {
  return (
    <div className={styles.containerContribuir}>
      <div className={styles.img}></div>
      <div className={styles.content}>
        <div className={styles.texto}>
          <span>¿Eres una fundación, ONG o proyecto de carácter social?</span>
          <p>
            Haz parte de gentem y mejora tus probabilidades de recibir
            donaciones.
          </p>
        </div>
        <div className={styles.btnFl}>
          <a
            href="https://gentem.typeform.com/to/qN1hfz"
            rel="noopener noreferrer"
            target={'_blank'}
          >
            <button
              className={styles.btnContribuir}
              style={{ background: '#237ed5' }}
            >
              <span>Regístrate </span>
              <Heart />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Cont
