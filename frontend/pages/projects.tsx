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

// Schema
const querySchema = gql`
  query Organizations(
    $causeId: String
    $country: String
    $donationLinks: Boolean
    $donationBankAccountName: Boolean
    $donationProducts: Boolean
    $lastOrganizationId: String
  ) {
    getOrganizations(
      limit: 12
      causeId: $causeId
      country: $country
      donationLinks: $donationLinks
      donationBankAccountName: $donationBankAccountName
      donationProducts: $donationProducts
      lastOrganizationId: $lastOrganizationId
    ) {
      pageData {
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
  lastOrganizationId: '',
}
const OngList: NextPage = () => {
  // Filter State
  const [filters, setFilters] = useState(filtersDefault)
  const { data, loading, error, refetch, fetchMore, updateQuery } = useQuery(
    querySchema,
    {
      variables: filters,
      ssr: true,
    }
  )
  // Filter handlers
  const handleCountry = async (country) => {
    await setFilters({ ...filters, country: country })
    await refetch()
  }
  const handleCauseId = async (causeId) => {
    await setFilters({ ...filters, causeId: causeId })
    await refetch()
  }
  const handleDonationLinks = async (boolean) => {
    await setFilters({ ...filters, donationLinks: boolean })
    await refetch()
  }
  const handleDonationBankAccountName = async (boolean) => {
    await setFilters({
      ...filters,
      donationBankAccountName: boolean,
    })
    await refetch()
  }
  const handleDonationProducts = async (boolean) => {
    await setFilters({
      ...filters,
      donationProducts: boolean,
    })
    await refetch()
  }
  const handleNextPage = async () => {
    const organizations = data.getOrganizations.organizations
    const lastOrganization = organizations[organizations.length - 1]
    await setFilters({ ...filters, lastOrganizationId: lastOrganization.id })
    await fetchMore({
      variables: filters,
      updateQuery: (prev, { fetchMoreResult }) => {
        fetchMoreResult.getOrganizations.organizations = [
          ...fetchMoreResult.getOrganizations.organizations,
          ...prev.getOrganizations.organizations,
        ]
        return fetchMoreResult
      },
    })
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
  /* console.log(data.getOrganizations.organizations) */
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>
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
