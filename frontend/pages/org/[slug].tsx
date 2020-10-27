import { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

// Usables & Componentes
import LayoutContainer from '@/components/Layout/LayoutContainer'
import { getForId, getAllOrganizationsPath } from '../../api/filters'
import { Contenido, ContenidoSider } from '../../components/organization'
import Map from '../../components/organization/Map'

// Styles
import styles from '../../components/organization/organization.module.scss'

const ORG: NextPage = (props) => {
  const { organization }: any = props
  if (!organization) {
    return <>loading..</>
  }
  const ong = organization

  return (
    <>
      <Head>
        <title>{ong.primaryData.name} | gentem</title>
      </Head>
      <div className={styles.ongProfile}>
        <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
          <Map location={ong.location} />
          <LayoutContainer>
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
          </LayoutContainer>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths
  await getAllOrganizationsPath().then((data) => {
    paths = data.map((org) => ({
      params: { slug: org.slug },
    }))
    return paths
  })
  /*   const paths = await res.map((org) => ({
    params: { slug: org.slug },
  })) */
  return { paths, fallback: false }
  /* return { paths: [], fallback: false } */
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const organization = await getForId(params.slug)

  return { props: { organization }, revalidate: 20 }
}

export default ORG
