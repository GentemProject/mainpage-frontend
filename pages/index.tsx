import { Fragment } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import LayoutContainer from '@/components/utils/architecture/Layout/container'
/* import Container from '../components/----home-----/container' */
import Banner from '@/components/utils/architecture/hero'
/* import Fl from '../components/----home-----/fl-1' */
import Colab from '@/components/specific/home/colaboration/colaboracion'
import Stats from '@/components/specific/home/stats/stats'
/* import Info from '../components/----home-----/info-home' */
import Info from '@/components/specific/home/info/info-home'
import Nos from '@/components/specific/home/about/nosotros-home'
import Ongs from '@/components/utils/interactive/recentOng/'
import Contribuir from '@/components/specific/home/colaboration/contribuir'
import styles from '@/components/specific/home/style.module.scss'
import { getLastest } from '../api/filters'
import Link from 'next/link'
import Button from '@/components/utils/interactive/inputs/buttons/primary'

// Apollo
import { initializeApollo } from '../api'
import { useQuery, gql } from '@apollo/client'
import { getOrganizationsHome } from 'interfaces/organization'

// Schema
const querySchema = gql`
  query getOrganizationsHome($limit: Float) {
    getOrganizations(limit: $limit) {
      name
      slug
      coordenateY
      logoUrl
    }
  }
`

export default function Home(props: { query: getOrganizationsHome }) {
  const { query } = props
  const g = (
    <Fragment>
      <strong>gentem </strong>es un directorio abierto de organizaciones sin
      ánimo de lucro que trabajan para mejorar el mundo en el que vivimos.
      Puedes buscarlas por ubicación, causa por la que trabajan, y formas de
      donar.
    </Fragment>
  )
  const contentBanner = (
    <div className={styles.btnBanner}>
      <Link href="/projects">
        <a>
          <Button desc="Ver todas las organizaciones" color="#f44b53" />
        </a>
      </Link>
    </div>
  )
  return (
    <>
      <Head>
        <title>
          gentem | Directorio abierto de organizaciones sin ánimo de lucro
        </title>
      </Head>
      <LayoutContainer
        scaped={
          <Banner
            img="../banner.jpg"
            content={contentBanner}
            desc="Descubre las organizaciones que trabajan por un futuro mejor"
          />
        }
      >
        <div className={styles.home}>
          <Colab
            desc={g}
            btn="¡Apoya a una organización!"
            colorBtn=" #237ed5"
          />
          <Info />
          <Colab
            desc="El aporte que hagas, por pequeño que te parezca, puede significar un día de comida para una familia."
            btn="¡Ayuda ya!"
            colorBtn="#F44B53"
          />
          <Stats />

          <Nos />
          {query.loading ? (
            'Cargando...'
          ) : (
            <Ongs ongs={query.data.getOrganizations} />
          )}
        </div>
      </LayoutContainer>
      <Contribuir />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const query = await apolloClient.query({
    query: querySchema,
    variables: 8,
  })
  apolloClient.cache.extract()

  return {
    props: {
      query,
    },
  }
}
