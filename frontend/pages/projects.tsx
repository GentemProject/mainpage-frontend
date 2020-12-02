import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

// Components & Usables
import CauseList from '@/components/specific/causeList'

// Apollo
import { initializeApollo } from '../api'
import { useQuery, gql } from '@apollo/client'

interface organization {
  id: string
  name: string
  slug: string
  country: string
  logoUrl: string
  donationLinks: string[]
  donationBankAccountName: string
  donationProducts: string
  causes: string[]
}

interface pageData {
  totalOrganizations: number
  hasNextPage: boolean
  endCursor: string
}

interface data {
  getOrganizations: {
    pageData: pageData
    organizations: organization[]
  }
}

// Schema
const querySchema = gql`
  query Organizations(
    $causeId: String
    $country: String
    $donationLinks: Boolean
    $donationBankAccountName: Boolean
    $donationProducts: Boolean
    $endCursor: String
  ) {
    getOrganizations(
      first: 12
      endCursor: $endCursor
      causeId: $causeId
      country: $country
      donationLinks: $donationLinks
      donationBankAccountName: $donationBankAccountName
      donationProducts: $donationProducts
    ) {
      pageData {
        totalOrganizations
        hasNextPage
        endCursor
      }
      organizations {
        id
        name
        slug
        country
        logoUrl
        donationLinks
        donationBankAccountName
        donationProducts
        causes {
          name
        }
      }
    }
  }
`

const filtersDefault = {
  country: '',
  causeId: '',
  donationLinks: false,
  donationBankAccountName: false,
  donationProducts: false,
  endCursor: '',
}
const OngList: NextPage = () => {
  // Filter State
  const [filters, setFilters] = useState(filtersDefault)
  const { data, loading, error, refetch, fetchMore } = useQuery<data>(
    querySchema,
    {
      variables: filters,
    }
  )
  // Filter handlers
  const handleCountry = async (country) => {
    await setFilters({ ...filters, country: country, endCursor: '' })
    await refetch()
  }
  const handleCauseId = async (causeId) => {
    await setFilters({ ...filters, causeId: causeId, endCursor: '' })
    await refetch()
  }
  const handleDonationLinks = async (boolean) => {
    await setFilters({ ...filters, donationLinks: boolean, endCursor: '' })
    await refetch()
  }
  const handleDonationBankAccountName = async (boolean) => {
    await setFilters({
      ...filters,
      donationBankAccountName: boolean,
      endCursor: '',
    })
    await refetch()
  }
  const handleDonationProducts = async (boolean) => {
    await setFilters({
      ...filters,
      donationProducts: boolean,
      endCursor: '',
    })
    await refetch()
  }
  const resetFilters = async () => {
    await setFilters(filtersDefault)
  }
  if (error) {
    console.log(error)
  }
  const handleNextPage = async () => {
    const { endCursor } = data.getOrganizations.pageData
    await setFilters({ ...filters, endCursor: endCursor })
    fetchMore({
      variables: filters,
      updateQuery: (prevResult: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult
        return {
          getOrganizations: {
            ...data?.getOrganizations,
            data: [
              ...data?.getOrganizations?.organizations,
              ...fetchMoreResult?.getOrganizations?.organizations,
            ],
          },
        }
        /*         fetchMoreResult.getOrganizations = [
          ...prevResult.getOrganizations,
          ...fetchMoreResult.getOrganizations,
        ]
        return fetchMoreResult */
      },
    })
  }
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>

      {!loading && console.log(data.getOrganizations)}
      <CauseList
        select={{ handleCauseId, handleCountry }}
        checkbox={{
          handleDonationLinks,
          handleDonationBankAccountName,
          handleDonationProducts,
        }}
        handleNextPage={handleNextPage}
        filters={filters}
        resetFilters={resetFilters}
        loading={loading}
        data={!loading && data.getOrganizations}
      />
    </>
  )
}

export default OngList

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: querySchema,
    variables: filtersDefault,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
