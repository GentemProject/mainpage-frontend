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
export default function Home() {
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
              <Colab
                desc=" Te conectamos con ONGs, fundaciones y otras iniciativas que están ayudando a los más afectados por la
          emergencia del COVID-19"
                btn="Ayuda ahora"
                colorBtn=" #237ed5"
              />
            </Fl>
            <Fl>
              <Stats />
            </Fl>
            <Fl>
              <Info />
            </Fl>
            <Fl>
              <Colab
                desc=" El aporte que hagas, por pequeño que te parezca, puede significar un día de comida para una familia."
                btn="Apoya un proyecto"
                colorBtn="#F44B53"
              />
            </Fl>
            <Fl>
              <Nos />
            </Fl>
            <Fl>
              <Ongs />
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
