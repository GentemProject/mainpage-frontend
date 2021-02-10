import React, { useEffect, useState, Fragment } from 'react'
import * as styles from '../../styles/home/home.module.scss'
import Link from 'next/link'
/* const logoDefault = '/logoDefault.png' */
const logoDefault = '/logoDefault.png'
function Ongs(props: any) {
  return (
    <div>
      <div className={styles.containerOngs}>
        <div className={styles.texto}>
          <h2>Últimas organizaciones en unirse</h2>
        </div>
        <div className={styles.desc}>
          <p>
            Estas son las organizaciones que recientemente se han unido a{' '}
            <strong>gentem</strong>. ¿Qué estás esperando para ayudarlas?
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
                slug={data.slug}
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
    <Link key={props.slug} href="/org/[slug]" as={`/org/${props.slug}`}>
      <div className={styles.ficha}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${props.i})` }}
        >
          {
            //<img src={props.i} alt={props.alt} />
          }
        </div>
      </div>
    </Link>
  )
}
export default Ongs
