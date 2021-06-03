import React from 'react';
import { Box, MenuItem, Select } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { getCauses } from 'modules';
import { useFilters } from '../context';

import styles from './styles.module.scss';

export function SideBar() {
  const { setFilters } = useFilters();
  const { data, loading } = getCauses();

  const handleCauses = (causesIds: any) => {
    setFilters((filters) => ({ ...filters, causesIds }));
  };

  if (loading) {
    return (
      <div className={styles.SideBar}>
        <Box mb={5}>
          <h6>
            Usa los filtros para encontrar las organizaciones que quieras apoyar
          </h6>
        </Box>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </div>
    );
  }

  return (
    <>
      <Box mb={5}>
        <h6>
          Usa los filtros para encontrar las organizaciones que quieras apoyar
        </h6>
      </Box>
      <Box mb={5} className={styles.Section}>
        <h5>Causa afectada</h5>
        <Select
          multiple
          fullWidth
          defaultValue={[data.causes[0].id]}
          onChange={(e) => handleCauses(e.target.value)}
        >
          {data.causes.map((cause) => (
            <MenuItem key={cause.id} value={cause.id}>
              {cause.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
}
