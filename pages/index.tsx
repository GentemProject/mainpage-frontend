import { useEffect } from 'react'
import Head from 'next/head'
/* import Container from '../components/----home-----/container' */
import Content from 'components/specific/home/'
// Apollo
import { initializeApollo } from '../api'
import { useQuery, gql } from '@apollo/client'
import { getOrganizationsHome } from 'interfaces/organization'
import { useHeader } from 'contexts/general'
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

export default function Home(props: {
  query: getOrganizationsHome
}): JSX.Element {
  const { query } = props
  const currentHeader = useHeader()
  useEffect(() => {
    currentHeader.changeClass('')
  }, [])
  return (
    <>
      <Head>
        <title>
          gentem | Directorio abierto de organizaciones sin ánimo de lucro
        </title>
      </Head>

      <Content query={null} />
    </>
  )
}
/**
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
*/
