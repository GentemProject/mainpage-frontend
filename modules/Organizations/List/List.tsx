import React from 'react';
import { useQuery } from '@apollo/client';

import { Pagination } from 'components';

import { useFilters } from '../context';
import { Item, LoadingItem } from '../Item';
import { GET_ORGANIZATIONS } from '../graphql';
import { OrganizationMin } from '../types';
import { Button } from '@material-ui/core';

type Response = {
  data: {
    count: number;
    rows: OrganizationMin[];
  };
};

export function List() {
  const { filters, setFilters, resetFilters } = useFilters();
  const { data, loading } = useQuery<Response>(GET_ORGANIZATIONS, {
    variables: filters,
  });

  const handlePagination = (page: number) => {
    setFilters((filters) => ({ ...filters, page }));
  };

  if (!data || loading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {Array.from(Array(10).keys()).map((item) => (
          <LoadingItem key={item} />
        ))}
      </div>
    );
  }

  if (data.data.rows.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="text-center">
          <h3 className="text-2xl	text-medium mb-2">
            No encontramos ninguna organización con los filtros que escogiste
          </h3>
          <p className="text-sm text-gray-800 mb-8">
            Cambia tus filtros de búsqueda para encontrar una organización a la
            que quieras ayudar
          </p>
          <Button variant="outlined" color="primary" onClick={resetFilters}>
            Mostrar todas las organizaciones
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        Mostrando {data.data.rows.length} de las {data.data.count}{' '}
        organizaciones encontradas
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {data.data.rows.map((organization) => (
          <Item key={organization.id} organization={organization} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Pagination
          page={filters.page}
          limit={filters.limit}
          total={data.data.count}
          onChange={handlePagination}
        />
      </div>
    </>
  );
}
