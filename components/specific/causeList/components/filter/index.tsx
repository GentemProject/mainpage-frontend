import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

// Components
import SearchSelect from '../SearchSelect'
import { TextCheck } from '../../../../utils/interactive/inputs/form/switch'
import { getDistinct } from '../../../../../api/filters'

/*  Material UI for Select */
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

import style from '../../style.module.scss'
function Filter({ select, filters }) {
  type Response = {
    causes: {
      id: string
      name: string
    }[]
  }
  const schema = gql`
    {
      causes: getCauses {
        id
        name
      }
    }
  `
  const { data, loading } = useQuery<Response>(schema)

  return (
    <>
      <div className={style.filterContainer}>
        <div>
          <h6>
            Usa los filtros para encontrar las organizaciones que quieras apoyar
          </h6>
        </div>
        <SearchSelect title="Causa afectada" info="Filtra por causa">
          <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">Causa</InputLabel>
            <Select
              disabled={loading}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.causeId}
              onChange={(e) => {
                select.handleCauseId(e.target.value)
              }}
            >
              {data?.causes.map((cause, index) => (
                <MenuItem key={index} value={cause.id}>
                  {cause.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SearchSelect>
        <SearchSelect
          title="Tipo de donación"
          info="Filtra según la forma en la que quieras donar"
        >
          {/* <TextCheck
            title="Donar online"
            desc="Link para donar desde casa"
            change={checkbox.handleDonationLinks}
            boolean={filters.donationLinks}
            name="paymenData"
          />
          <TextCheck
            title="Transferencia bancaria"
            desc="Información de las cuentas para que hagas una transferencia"
            change={checkbox.handleDonationBankAccountName}
            boolean={filters.donationBankAccountName}
            name="transfer"
          />

          <TextCheck
            title="Donar productos"
            desc="Información sobre como entregar los productos que quieras donar"
            change={checkbox.handleDonationProducts}
            boolean={filters.donationProducts}
            name="products"
          /> */}
        </SearchSelect>
      </div>
    </>
  )
}

export default Filter
