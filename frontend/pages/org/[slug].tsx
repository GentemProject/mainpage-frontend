import { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

// Usables & Componentes
import { getForId } from '../../api/filters'
import { Contenido, ContenidoSider } from '../../components/organization'
import Layout from '../../components/Layout'
import Map from '../../components/organization/Map'

// Styles
import * as styles from '../../styles/organization.module.scss'

const ORG: NextPage = (props) => {
  const { organization }: any = props
  if (!organization) {
    return <>loading..</>
  }
  const ong = organization

  return (
    <>
      <Head>
        <title>gentem | {ong.primaryData.name}</title>
      </Head>
      <Layout>
        <div className={styles.ongProfile}>
          <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
            <Map location={ong.location}></Map>

            <div className={`${styles.ongProfileContent} ${styles.layout}`}>
              <Contenido
                causeId={ong.primaryData.causeId}
                name={ong.primaryData.name}
                description={ong.primaryData.description}
                logo={ong.primaryData.logo}
                objetive={ong.primaryData.objective}
                howusedonation={ong.primaryData.howUseDonation}
                sponsors={ong.primaryData.sponsors}
                contact={ong.contact}
                socialMedia={ong.socialMedia}
                paymentData={ong.donationData}
                location={ong.location}
              />
              <ContenidoSider
                name={ong.primaryData.name}
                paymentData={ong.donationData}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.gentem.org/api/projects/getall')
  const projects = await res.json()
  const paths = projects.map((org) => ({
    params: { slug: org.slug },
  }))
  return { paths, fallback: false }
  /* return { paths: [], fallback: false } */
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const organization = await getForId(params.slug)

  return { props: { organization }, revalidate: 20 }
}

export default ORG
