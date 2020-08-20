import { useState, useEffect } from 'react'
import useLocation from '../../components/usables/useLocation'
import { NextPage } from 'next'
import Head from 'next/head'

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
  const [orgLocation, setOrgLocation] = useState<any>()
  const ong = organization[0]

  console.log(ong)
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

export async function getStaticPaths() {
  const res = await fetch('https://api.gentem.org/api/projects')
  const projects = await res.json()

  const paths = projects.map((org) => `/org/${org.slug}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.gentem.org/api/projects/${params.slug}`)
  const organizations = await res.json()
  const organization = organizations

  return { props: { organization } }
}

export default ORG
