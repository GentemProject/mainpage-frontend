import { useEffect, useState, Fragment } from 'react'
// Aislar componente o es especifico?
import styles from '../../../specific/home/style.module.scss'
import Link from 'next/link'
import { OrganizationHome } from 'interfaces/organization'
/* const logoDefault = '/logoDefault.png' */
const logoDefault = '/logoDefault.png'
function Ongs(props: { ongs: any }) {
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
          {props.ongs.map((data, index) => (
            <Ficha
              key={index}
              logoUrl={data.logoUrl ? data.logoUrl : logoDefault}
              alt={data.name}
              slug={data.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
function Ficha(props: {
  logoUrl: OrganizationHome['logoUrl']
  alt: OrganizationHome['name']
  slug: OrganizationHome['slug']
}) {
  return (
    <Link key={props.slug} href="/cause/[slug]" as={`/cause/${props.slug}`}>
      <div className={styles.ficha}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${props.logoUrl})` }}
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
