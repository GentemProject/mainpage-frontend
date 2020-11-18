import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import NProgress from 'nprogress'

// Components & Usables
import CauseList from '@/components/specific/causeList'
import { Loader } from '@/components/utils/interactive/loader'

// Apollo
import { initializeApollo } from '../api'
import { useQuery, gql } from '@apollo/client'

// Interfaces
const querySchema = gql`
  query Organizations(
    $causeId: String
    $country: String
    $donationLinks: Boolean
    $donationBankAccountName: Boolean
    $page: Float!
  ) {
    getOrganizations(
      limit: 12
      page: $page
      causeId: $causeId
      country: $country
      donationLinks: $donationLinks
      donationBankAccountName: $donationBankAccountName
    ) {
      pageData {
        totalPages
        hasNextPage
        totalOrganizations
      }
      organizations {
        id
        name
        slug
        country
        logoUrl
        donationLinks
        donationBankAccountName
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
  page: 0,
}
const OngList: NextPage = () => {
  // Filter State
  const [filters, setFilters] = useState(filtersDefault)
  const { data, loading, error, refetch } = useQuery(querySchema, {
    variables: filters,
    ssr: true,
  })
  // Filter handlers
  const handleCountry = async (country) => {
    await setFilters({ ...filters, country: country, page: 0 })
    await refetch()
  }
  const handleCauseId = async (causeId) => {
    await setFilters({ ...filters, causeId: causeId, page: 0 })
    await refetch()
  }
  const handleDonationLinks = async (booleanString) => {
    await setFilters({ ...filters, donationLinks: booleanString, page: 0 })
    await refetch()
  }
  const handleDonationBankAccountName = async (booleanString) => {
    await setFilters({
      ...filters,
      donationBankAccountName: booleanString,
      page: 0,
    })
    await refetch()
  }
  const handleNextPage = async () => {
    await setFilters({ ...filters, page: filters.page + 1 })
    await refetch()
  }

  const resetFilters = async () => {
    await setFilters(filtersDefault)
  }
  if (loading) {
    return <Loader />
  }
  if (error) {
    console.log(error)
  }
  console.log(data)
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>
      <CauseList
        select={{ handleCauseId, handleCountry }}
        checkbox={{ handleDonationLinks, handleDonationBankAccountName }}
        handleNextPage={handleNextPage}
        filters={filters}
        resetFilters={resetFilters}
        data={data.getOrganizations}
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
