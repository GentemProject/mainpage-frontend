import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';

// Components & Usables
import CauseList from '@/components/specific/causeList';

// Apollo
import { initializeApollo } from '../api';
import { useQuery, gql } from '@apollo/client';
import {
  getOrganizationsFilters,
  organizationsProjects,
} from 'interfaces/organization';

interface organization {
  id: string;
  name: string;
  slug: string;
  country: string;
  logoUrl: string;
  donationLinks: string[];
  donationBankAccountName: string;
  donationProducts: string;
  causes: string[];
}

interface pageData {
  totalOrganizations: number;
  hasNextPage: boolean;
  endCursor: string;
}

interface data {
  getOrganizations: {
    pageData: pageData;
    organizations: organization[];
  };
}

// Schema
/* const querySchema = gql`
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
` */

const querySchema = gql`
  query getOrganizationsFilter(
    $page: Float
    $country: String
    $causeId: String
  ) {
    getOrganizations(
      limit: 12
      page: $page
      country: $country
      causeId: $causeId
    ) {
      id
      name
      slug
      country
      logoUrl
      donationLinks
      donationBankAccountName
      causes {
        id
        name
      }
    }
  }
`;

const filtersDefault = {
  country: '',
  causeId: '',
  page: 0,
  /*   donationLinks: false,
  donationBankAccountName: false,

  donationProducts: false, */
  /*   endCursor: '', */
};
const OngList = (props: { query: getOrganizationsFilters }): JSX.Element => {
  const { query } = props;
  const [organizationArray, setOrganizationArray] = useState<
    organizationsProjects[]
  >(query.data.getOrganizations);
  const [loading, setLoading] = useState<boolean>(query.loading);
  // Filter State
  const [filters, setFilters] = useState(filtersDefault);
  const { data, refetch, fetchMore } = useQuery<
    getOrganizationsFilters['data']
  >(querySchema, {
    variables: filters,
  });
  // Filter handlers
  const handleCountry = async (country) => {
    await setFilters({
      ...filters,
      country: country,
      page: 0,
    });
    await setLoading(true);
    await refetch();
    await setOrganizationArray(data.getOrganizations);
    await setLoading(false);
  };
  const handleCauseId = async (causeId) => {
    await setFilters({
      ...filters,
      causeId: causeId,
      page: 0,
    });
    await setLoading(true);
    await refetch();
    await setOrganizationArray(data.getOrganizations);
    await setLoading(false);
  };
  /*  
  const handleDonationLinks = async (boolean) => {
    await setFilters({ ...filters, donationLinks: boolean })
    await refetch()
  } */
  /*   const handleDonationBankAccountName = async (boolean) => {
    await setFilters({
      ...filters,
      donationBankAccountName: boolean,
      endCursor: '',
    })
    await refetch()
  } */
  /*   const handleDonationProducts = async (boolean) => {
    await setFilters({
      ...filters,
      donationProducts: boolean,
      endCursor: '',
    })
    await refetch()
  } */
  const resetFilters = async () => {
    await setFilters(filtersDefault);
  };

  const handleNextPage = async () => {
    await setFilters({
      ...filters,
      page: filters.page + 1,
    });
    await fetchMore({
      variables: filters,
      updateQuery: (prevResult: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        console.log(prevResult, 'prev');
        console.log(fetchMoreResult, 'more');
        return {
          getOrganizations: {
            ...query.data.getOrganizations,
            data: [
              ...query.data.getOrganizations,
              ...fetchMoreResult?.getOrganizations,
            ],
          },
        };
      },
    });
  };
  /*         fetchMoreResult.getOrganizations = [
          ...prevResult.getOrganizations,
          ...fetchMoreResult.getOrganizations,
        ]
        return fetchMoreResult */
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>
      <CauseList
        select={{
          handleCauseId,
          handleCountry,
        }}
        /*  checkbox={{
          handleDonationLinks,
          handleDonationBankAccountName,
          handleDonationProducts,
        }} */
        handleNextPage={handleNextPage}
        filters={filters}
        resetFilters={resetFilters}
        loading={loading}
        data={!loading && organizationArray}
      />
    </>
  );
};

export default OngList;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const query = await apolloClient.query({
    query: querySchema,
    variables: filtersDefault,
  });
  apolloClient.cache.extract();
  return {
    props: {
      query,
    },
  };
};
