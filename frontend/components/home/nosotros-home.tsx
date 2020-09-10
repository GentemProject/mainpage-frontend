import React from 'react'
const iSearch = '/search.svg'
const iHelp = '/help.svg'
import Link from 'next/link'
const iSelect = '/select.svg'
import * as styles from '../../styles/home/home.module.scss'
function Noshome() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.texto}>
        <h2>¿Cómo funciona gentem?</h2>
      </div>
      <Content
        img={iSearch}
        tit="Busca entre las fundaciones"
        desc="Elige la ubicación y la comunidad que quieres impactar con el
                tipo de donación que quieras brindar"
      />
      <Content
        img={iSelect}
        tit="Selecciona la que más te guste"
        desc="De acuerdo al filtro que hayas realizado, selecciona entre el
                perfil de cada una de las fundaciones que te presentamos"
      />
      <Content
        img={iHelp}
        tit="Ayuda como puedas"
        desc="   Cuando elijas la fundación que quieres impactar, realiza tu
                donación mediante los diferentes métodos presentados"
      />
      <div className={styles.btnFl}>
        <Link href="/projects">
          <button className={styles.btnColab} style={{ background: '#237ed5' }}>
            <span>¡Ayuda ya!</span>
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
