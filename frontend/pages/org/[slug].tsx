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

  useEffect(() => {
    setOrgLocation(organization.location)
  }, [])

  const location = useLocation(orgLocation)

  return (
    <>
      <Head>
        <title>gentem | {organization.name}</title>
      </Head>
      <Layout>
        <div className={styles.ongProfile}>
          <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
            <Map
              googleMapURL={
                'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCDr1CIiG6Nop7lpjmIbVk8NVC1IjW_oXE'
              }
              city={organization.city}
              country={organization.country}
              coordenates={location}
            ></Map>
            <div className={`${styles.ongProfileContent} ${styles.layout}`}>
              <Contenido
                communityworkwith={organization.communityworkwith}
                name={organization.name}
                description={organization.description}
                logo={organization.logo}
                objetive={organization.objective}
                howusedonation={organization.howusedonations}
                website={organization.website}
                email={organization.email}
                phone={organization.phones}
                facebook={organization.facebook}
                instagram={organization.instagram}
                paymentslink={organization.paymentslink}
                whatsapp={organization.whatsapp}
                sponsors={organization.sponsors}
                accounts={organization.accounts}
                city={organization.city}
                country={organization.country}
                instructionstodeliverproducts={
                  organization.instructionstodeliverproducts
                }
              />
              <ContenidoSider
                name={organization.name}
                accounts={organization.accounts}
                instructionstodeliverproducts={
                  organization.instructionstodeliverproducts
                }
                paymentslink={organization.paymentslink}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.gentem.org/organizations')
  const projects = await res.json()

  const paths = projects.data.map((org) => `/org/${org.slug}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.gentem.org/organizations/${params.slug}`)
  const organizations = await res.json()
  const organization = organizations.data

  return { props: { organization } }
}

export default ORG
