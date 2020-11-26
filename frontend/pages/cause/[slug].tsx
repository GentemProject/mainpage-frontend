import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Usables & Componentes
import Cause from '@/components/specific/cause'

// Apollo
import { initializeApollo } from '../../api'
import { useQuery, gql } from '@apollo/client'

const querySchema = gql`
  query Organization($slug: String) {
    getOrganization(slug: $slug) {
      name
      description
      logoUrl
      howItIsUsingDonations
      contactEmail
      contactPhone
      contactWebsite
      whatsappPhone
      facebookUrl
      twitterUrl
      linkedinUrl
      instagramUrl
      donationBankAccountName
      donationLinks
      city
      country
      coordenates {
        x
        y
      }
      sponsors
      causes {
        name
      }
    }
  }
`

const ORG: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, loading } = useQuery(querySchema, { variables: { slug } })
  const ong = data.getOrganization

  if (loading) return <span>Loading...</span>
  return (
    <>
      <Head>
        <title>{ong.name} | gentem</title>
      </Head>
      <Cause data={ong} />
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

  await apolloClient.query({
    query: querySchema,
    variables: { slug: params.slug },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default ORG
