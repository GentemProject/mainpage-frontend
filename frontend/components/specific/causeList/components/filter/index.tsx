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
/* import {
  Select,
  Option,
} from '../../../../utils/interactive/inputs/form/select' */

// Style
import style from '../../style.module.scss'
function Filter({ select, checkbox, filters }) {
  const [ciudad, setCiudad] = useState([])
  useEffect(() => {
    getDistinct().then(
      (data) => {
        setCiudad(data)
      },
      (error) => {
        setCiudad(error)
      }
    )
  }, [])

  // getCause from GraphQL
  const querySchema = gql`
    {
      getCauses {
        id
        name
      }
    }
  `
  const { data, loading } = useQuery(querySchema, {
    variables: filters,
    ssr: true,
  })
  return (
    <>
      <div className={style.filterContainer}>
        <div>
          <h6>
            Usa los filtros para encontrar las organizaciones que quieras apoyar
          </h6>
        </div>
        <SearchSelect title="Ubicación" info="Filtra por país">
          <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">País</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                filters.country === '' ? 'Todos los paises' : filters.country
              }
              onChange={async (e) => {
                await select.handleCountry(e.target.value)
              }}
            >
              <MenuItem value="Todos los paises">Todos los paises</MenuItem>
              {ciudad &&
                ciudad.map((data) => {
                  return (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  )
                })}
            </Select>
          </FormControl>
        </SearchSelect>
        <SearchSelect title="Causa afectada" info="Filtra por causa">
          <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">Causa</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                filters.causeId === '' ? 'Todas las causas' : filters.causeId
              }
              onChange={async (e) => {
                await select.handleCauseId(e.target.value)
              }}
            >
              <MenuItem value="">Todos las causas</MenuItem>
              {!loading &&
                data.getCauses.map((data) => {
                  return (
                    <MenuItem key={data.id} value={data.id}>
                      {data.name}
                    </MenuItem>
                  )
                })}
            </Select>
          </FormControl>
        </SearchSelect>
        <SearchSelect
          title="Tipo de donación"
          info="Filtra según la forma en la que quieras donar"
        >
          <TextCheck
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
          {/*
          <TextCheck
            title="Donar productos"
            desc="Información sobre como entregar los productos que quieras donar"
            change={changeFilters}
            boolean={filters.products}
            name="products"
          /> */}
        </SearchSelect>
      </div>
    </>
  )
}

export default Filter
