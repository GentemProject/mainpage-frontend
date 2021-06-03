import React from 'react';
import { useQuery } from '@apollo/client';

import { useFilters } from '../context';
import { Item, LoadingItem } from '../Item';
import { GET_ORGANIZATIONS } from '../graphql';
import { GetOrganizationsResponse } from '../types';

export function List() {
  const { filters } = useFilters();
  const { data, loading } = useQuery<GetOrganizationsResponse>(
    GET_ORGANIZATIONS,
    {
      variables: filters,
    }
  );

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {Array.from(Array(8).keys()).map((item) => (
          <LoadingItem key={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.organizations.map((organization) => (
        <Item key={organization.id} organization={organization} />
      ))}
    </div>
  );
}
