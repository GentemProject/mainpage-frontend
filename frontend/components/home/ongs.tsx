import React, { useEffect, useState, Fragment } from 'react'
import * as styles from '../../styles/home/home.module.scss'

/* const logoDefault = '/logoDefault.png' */
const logoDefault = '/logoDefault.png'
function Ongs(props: any) {
  return (
    <div>
      <div className={styles.containerOngs}>
        <div className={styles.texto}>
          <h2>Últimos proyectos en unirse</h2>
        </div>
        <div className={styles.desc}>
          <p>
            Estos son los proyectos que recientemente se han unido a
            <strong> gentem</strong>. ¿Qué estás esperando para apoyarlos?
          </p>
        </div>

        <div className={styles.containerFichas}>
          {props.load ? (
            <span>cargando</span>
          ) : (
            props.ongs.map((data) => (
              <Ficha
                key={data.primaryData.name}
                i={data.primaryData.logo ? data.primaryData.logo : logoDefault}
                alt={data.primaryData.name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
function Ficha(props: any) {
  return (
    <div className={styles.ficha}>
      <div className={styles.img}>
        <img src={props.i} alt={props.alt} />
      </div>
    </div>
  )
}
export default Ongs
