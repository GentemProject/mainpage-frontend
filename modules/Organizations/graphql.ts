import { gql } from '@apollo/client';

export const GET_ORGANIZATIONS = gql`
  query($limit: Float, $causesIds: [String]) {
    organizations: getOrganizations(limit: $limit, causesIds: $causesIds) {
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
`;
