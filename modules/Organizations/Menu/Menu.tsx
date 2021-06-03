import React from 'react';
import { Box, MenuItem, Select } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { getCauses } from 'modules';
import { useFilters } from '../context';

export function SideBar() {
  const { setFilters } = useFilters();
  const { data, loading } = getCauses();

  const handleCauses = (causesIds: string[]) => {
    setFilters((filters) => ({
      ...filters,
      causesIds: causesIds.includes('all') ? undefined : causesIds,
    }));
  };

  const handleCountry = (country: string) => {
    setFilters((filters) => ({
      ...filters,
      country: country === 'all' ? undefined : country,
    }));
  };

  if (loading) {
    return (
      <div>
        Usa los filtros para encontrar las organizaciones que quieras apoyar
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        Usa los filtros para encontrar las organizaciones que quieras apoyar
      </div>
      <div className="mb-6">
        <h5>Filtrar por país</h5>
        <Select
          fullWidth
          defaultValue="all"
          onChange={(e) => handleCountry(String(e.target.value))}
        >
          <MenuItem value="all">Todas los países</MenuItem>
          <MenuItem value="alle">Todas los países ee</MenuItem>
          <MenuItem value="alle333">Todas los países ee333</MenuItem>
        </Select>
      </div>
      <div className="mb-6">
        <h5>Filtrar por causa</h5>
        <Select
          // multiple
          fullWidth
          defaultValue={'all'}
          onChange={(e) => handleCauses([String(e.target.value)])}
        >
          <MenuItem value="all">Todas las causas</MenuItem>
          {data.causes.map((cause) => (
            <MenuItem key={cause.id} value={cause.id}>
              {cause.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
}
