import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Usables & Componentes
import Cause from '@/components/specific/cause'

// Apollo
import { initializeApollo } from '../../api'
import { useQuery, gql } from '@apollo/client'
import { getOrganization } from 'interfaces/organization'

const querySchema = gql`
  query getOrganization($slug: String) {
    getOrganization(slug: $slug) {
      id
      name
      description
      goal
      logoUrl
      howItIsUsingDonations
      contactEmail
      contactPhone
      contactWebsite
      whatsappPhone
      facebookUrl
      twitterUrl
      instagramUrl
      donationBankAccountName
      donationLinks
      city
      country
      coordenateX
      coordenateY
      causes {
        name
      }
    }
  }
`

const ORG = (props: { query: getOrganization }): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  console.log(props.query.data.getOrganization.name)
  /*   const ong = data.getOrganization */

  if (props.query.loading) return <span>Loading...</span>
  return (
    <>
      <Head>
        <title>{props.query.data.getOrganization.name} | gentem</title>
      </Head>
      <Cause data={props.query.data.getOrganization} />
    </>
  )
}

/* export const getStaticPaths: GetStaticPaths = async () => {
  let paths
  paths = [{ params: { slug: 'kawsay' } }]
  return { paths, fallback: false }
} */

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const query = await apolloClient.query({
    query: querySchema,
    variables: { slug: params.slug },
  })
  apolloClient.cache.extract()
  return {
    props: {
      query,
    },
  }
}

export default ORG
