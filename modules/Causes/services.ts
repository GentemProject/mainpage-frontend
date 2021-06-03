import { gql, useQuery } from '@apollo/client';

export function getCauses() {
  const QUERY = gql`
    {
      causes: getCauses {
        id
        name
      }
    }
  `;

  type Response = {
    causes: {
      id: string;
      name: string;
    }[];
  };

  return useQuery<Response>(QUERY);
}
