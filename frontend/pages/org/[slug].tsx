import { useState, useEffect } from 'react'
import useLocation from '../../components/usables/useLocation'
import { NextPage } from 'next'
/* import { useRouter } from 'next/router' */
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

// Usables & Componentes
import { Contenido, ContenidoSider } from '../../components/organization'
import Layout from '../../components/Layout'
import Map from '../../components/organization/Map'

// Interfaces
import { Organization } from '../../interfaces/organization'

// Styles
import * as styles from '../../styles/organization.module.scss'

interface Props {
  organization: Organization
}

const ORG: NextPage<Props> = ({ organization }) => {
  /*   const router = useRouter() */
  /*   const { slug } = router.query */
  const [orgLocation, setOrgLocation] = useState<any>()
  const ong = organization[0]

  if (ong.location !== undefined) {
    useEffect(() => {
      setOrgLocation(ong.location.map)
    }, [])
  }

  const location = useLocation(orgLocation)
  return (
    <>
      <Head>
        <title>gentem | {ong.primaryData.name}</title>
      </Head>
      <Layout>
        <div className={styles.ongProfile}>
          <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
            <Map
              googleMapURL={
                'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCDr1CIiG6Nop7lpjmIbVk8NVC1IjW_oXE'
              }
              location={ong.location}
              coordenates={location}
            ></Map>
            <div className={`${styles.ongProfileContent} ${styles.layout}`}>
              <Contenido
                communityworkwith={ong.primaryData.communityId}
                name={ong.primaryData.name}
                description={ong.primaryData.description}
                logo={ong.primaryData.logo}
                objetive={ong.primaryData.objective}
                howusedonation={ong.primaryData.howUseDonation}
                sponsors={ong.primaryData.sponsors}
                contact={ong.contact}
                paymentData={ong.paymentData}
                city={ong.location}
              />
              <ContenidoSider
                name={ong.primaryData.name}
                paymentData={ong.paymentData}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.gentem.org/api/projects')
  const projects = await res.json()
  const paths = projects.map((org) => `/org/${org.slug}`)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://api.gentem.org/api/projects/${params.slug}`)
  const organization = await res.json()
  return { props: { organization } }
}

export default ORG
