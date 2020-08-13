import React from 'react'
import FlDos from './fl-2'
import * as styles from '../../styles/home/home.module.scss'
const img1 = '/poverty.png'
const img2 = '/real.png'
const img3 = '/together.png'
function Infohome() {
  return (
    <div className={styles.containerInfoHome}>
      <FlDos>
        <div className={styles.infoHome}>
          <div className={styles.colm2}>
            <OvalI col="#FFCF53" i={img1} id="1" />
          </div>
          <div className={styles.colm2}>
            <Info
              col="#FFCF53"
              tit="La extrema 
pobreza amenaza Latino América"
              cuerpo="En los países latinos más del 50% de la población trabaja en condiciones de informalidad, sin ningún tipo de protección de parte del gobierno. Cada día que no pueden trabajar es un día que pasan hambre."
            />
          </div>
        </div>
      </FlDos>
      <FlDos>
        <div className={styles.flexRev}>
          <div className={styles.colm2}>
            <Info
              col="#1E8A61"
              tit="Unidos somos 
más fuertes"
              cuerpo="Con la ayuda de cada uno de nosotros, por pequeña que sea, podemos darle a alguien un respiro en estos tiempos de incertidumbre y la esperanza de un manaña mejor."
            />
          </div>
          <div className={styles.colm2}>
            <OvalI col="#FFCF53" i={img3} id="2" />
          </div>
        </div>
      </FlDos>
      <FlDos>
        <div className={styles.infoHome}>
          <div className={styles.colm2}>
            <OvalI col="#FFCF53" i={img2} id="3" />
          </div>
          <div className={styles.colm2}>
            <Info
              col="#237ED5"
              tit="Iniciativas 
sociales reales"
              cuerpo="Queremos que tu ayuda llegue a la población que realmente quieres impactar, por eso las fundaciones que encontrás en gentem han sido verificadas por nuestro equipo."
            />
          </div>
        </div>
      </FlDos>
    </div>
  )
}
function OvalI(props: any) {
  return (
    <div className={styles.containerImgInfo}>
      <div className={styles.cont}>
        <div className={styles.formaIm}>
          <img src={props.i} alt="" />
        </div>
      </div>
    </div>
  )
}
function Info(props: any) {
  return (
    <div className={styles.containerInfo}>
      <div className={styles.texto}>
        <h2>{props.tit}</h2>
      </div>
      <div className={styles.linea} style={{ background: props.col }}></div>
      <div className={styles.desc}>
        <p>{props.cuerpo}</p>
      </div>
    </div>
  )
}
export default Infohome
