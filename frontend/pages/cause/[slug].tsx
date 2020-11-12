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
      goal
      howItIsUsingDonations
      contactEmail
      contactPhone
      contactWebsite
      facebookUrl
      twitterUrl
      instagramUrl
      donationBankAccountName
      donationBankAccountType
      donationBankAccountNumber
      donationLinks
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
  console.log(data.getOrganization)
  return (
    <>
      ndeaa
      <Head>
        <title>{ong.name} | gentem</title>
      </Head>
      {/* <Cause data={...ong} /> */}
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
