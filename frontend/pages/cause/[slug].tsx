import { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

// Usables & Componentes
import { getForId, getAllOrganizationsPath } from '../../api/filters'
import Cause from '@/components/specific/cause'

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
      <Cause
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
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const organization = await getForId(params.slug)

  return { props: { organization }, revalidate: 20 }
}

export default ORG
