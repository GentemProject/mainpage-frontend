import React from 'react'
const iSearch = '/search.svg'
const iHelp = '/help.svg'
import Link from 'next/link'
const iSelect = '/select.svg'
import styles from '../style.module.scss'
function Noshome() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.texto}>
        <h2>¿Cómo funciona gentem?</h2>
      </div>
      <Content
        img={iSearch}
        tit="Busca entre las organizaciones"
        desc="Elige la ubicación y la causa a la que quieras aportar, junto con el tipo de donación que quieras hacer"
      />
      <Content
        img={iSelect}
        tit="Selecciona la que más te guste"
        desc="De acuerdo a los filtros que elijas, selecciona la organización que más te guste entre las registradas"
      />
      <Content
        img={iHelp}
        tit="Ayuda como puedas"
        desc="Cuando elijas la organización que quieres ayudar, realiza tu donación mediante los diferentes métodos disponibles"
      />
      <div className={styles.btnFl}>
        <Link href="/projects">
          <button className={styles.btnColab} style={{ background: '#237ed5' }}>
            <span>Ir a la lista de organizaciones</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
function Content(props: any) {
  return (
    <div className={styles.content}>
      <div className={styles.containerImg}>
        <div className={styles.img}>
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.tit}>
          <span>{props.tit}</span>
        </div>
        <div className={styles.desc}>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}
export default Noshome
