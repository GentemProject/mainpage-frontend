import { useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Container from '../components/home/container'
import Banner from '../components/home/banner'
import Fl from '../components/home/fl-1'
import Colab from '../components/home/colaboracion'
import Stats from '../components/home/stats'
import Info from '../components/home/info-home'
import Nos from '../components/home/nosotros-home'
import Ongs from '../components/home/ongs'
import Contribuir from '../components/home/contribuir'
import * as styles from '../styles/home/home.module.scss'
import { getLastest } from '../api/filters'

export default function Home({ orgs }: any) {
  const [ongs, setOngs] = useState<any>()
  const [isLoading, setIsloading] = useState<boolean>(true)

  useEffect(() => {
    /*     getLastest(8).then((data) => {
      setOngs(data)
      console.log(data)

    }) */
    setOngs(orgs)
    setIsloading(false)
  }, [])
  const g = (
    <Fragment>
      <strong>gentem </strong>es un directorio abierto de organizaciones sin
      ánimo de lucro que trabajan para mejorar el mundo en el que vivimos.
      Puedes buscarlas por ubicación, tipo de comunidades con las que trabajan,
      y forma de ayudarlas.
    </Fragment>
  )
  return (
    <>
      <Head>
        <title>
          gentem | Directorio de proyectos que luchan contra el coronavirus
        </title>
      </Head>
      <Container>
        <Layout>
          <Banner />
          <div className={styles.home}>
            <Fl>
              <Colab desc={g} btn="¡Ayuda ya!" colorBtn=" #237ed5" />
            </Fl>

            <Fl>
              <Info />
            </Fl>
            <Fl>
              <Colab
                desc="El aporte que hagas, por pequeño que te parezca, puede significar un día de comida para una familia."
                btn="Apoya una organización"
                colorBtn="#F44B53"
              />
            </Fl>
            <Fl>
              <Stats />
            </Fl>
            <Fl>
              <Nos />
            </Fl>
            <Fl>
              <Ongs ongs={ongs} load={isLoading} />
            </Fl>
          </div>
          <Fl>
            <Contribuir />
          </Fl>
        </Layout>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const orgs = await getLastest(8)

  return {
    props: {
      orgs,
    },
  }
}
