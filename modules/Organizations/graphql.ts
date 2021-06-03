import { gql } from '@apollo/client';

export const GET_ORGANIZATIONS = gql`
  query($limit: Float, $page: Float, $country: String, $causesIds: [String]) {
    data: getOrganizations(
      limit: $limit
      page: $page
      country: $country
      causesIds: $causesIds
    ) {
      count
      rows {
        id
        name
        slug
        logoUrl
        country
        causes {
          id
          name
        }
      }
    }
  }
`;
