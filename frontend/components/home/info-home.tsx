import React from 'react'
import FlDos from './fl-2'
import * as styles from '../../styles/home/home.module.scss'
const img1 = '/poverty.png'
const img2 = '/real.png'
const img3 = '/together.png'

function Infohome() {
  return (
    <div className={styles.containerInfoHome}>
      <Info
        col="#FFCF53"
        tit="La pobreza extrema azota a todo el mundo"
        cuerpo="Con la ayuda de cada uno de nosotros, por pequeña que sea, podemos darle a alguien un respiro en tiempos de incertidumbre, y la esperanza de un manaña mejor."
        i={img1}
        id="1"
      />
      <Info
        col="#1E8A61"
        tit="Unidos somos 
más fuertes"
        cuerpo="Tenemos que trabajar todos juntos, por un futuro mas brillante."
        i={img3}
        id="2"
      />
      <Info
        col="#237ED5"
        tit="Iniciativas 
sociales reales"
        cuerpo="Queremos que tu ayuda llegue a la población que realmente quieres impactar, por eso las fundaciones que encontrás en gentem han sido verificadas por nuestro equipo."
        i={img2}
        id="3"
      />
    </div>
  )
}

function Info(props: any) {
  return (
    <div className={styles.target}>
      <div className={styles.containerImgInfo}>
        <div className={styles.formaIm}>
          <img src={props.i} alt="" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.texto}>
          <h2>{props.tit}</h2>
        </div>
        <div className={styles.linea} style={{ background: props.col }}></div>
        <div className={styles.desc}>
          <p>{props.cuerpo}</p>
        </div>
      </div>
    </div>
  )
}

export default Infohome
