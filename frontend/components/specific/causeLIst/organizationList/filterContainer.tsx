import { useState, useEffect } from 'react'
// Components
import SearchSelect from './SearchSelect'
import { TextCheck } from '../../../utils/interactive/inputs/form/switch'
import { getDistinct } from '../../../../api/filters'
// Material UI for Select
//import FormControl from '@material-ui/core/FormControl'
//import Select from '@material-ui/core/Select'
//import InputLabel from '@material-ui/core/InputLabel'
//import MenuItem from '@material-ui/core/MenuItem'
import { Select, Option } from '../../../utils/interactive/inputs/form/select'
// Style
import style from './organizationList.module.scss'
import * as api from '../../../../api/categories.json'

function FilterContainer(props: any) {
  const { changeFilters, filters, changeSelect } = props
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
  return (
    <>
      <div className={style.filterContainer}>
        <div>
          <h6>
            Usa los filtros para encontrar las organizaciones que quieras apoyar
          </h6>
        </div>
        <SearchSelect title="Ubicación" info="Filtra por país">
          {/* 
         <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">País</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                filters.country === null ? 'Todos los paises' : filters.country
              }
              onChange={(e) => {
                changeSelect('country', e.target.value)
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
         */}
        </SearchSelect>
        <SearchSelect title="Causa afectada" info="Filtra por causa">
          <Select
            label="Ingrese causa"
            onChange={(e) => {
              changeSelect('causeId', e)
            }}
            id="causa"
          >
            {(val) =>
              api.data.map((cat, index) => (
                <Option
                  key={cat.cat_name}
                  val={val}
                  value={cat.cat_id[0]}
                  desc={cat.cat_name}
                />
              ))
            }
          </Select>
        </SearchSelect>
        <SearchSelect
          title="Tipo de donación"
          info="Filtra según la forma en la que quieras donar"
        >
          <TextCheck
            title="Donar online"
            desc="Link para donar desde casa"
            change={changeFilters}
            boolean={filters.paymenData}
            name="paymenData"
          />
          <TextCheck
            title="Transferencia bancaria"
            desc="Información de las cuentas para que hagas una transferencia"
            change={changeFilters}
            boolean={filters.transfer}
            name="transfer"
          />
          <TextCheck
            title="Donar productos"
            desc="Información sobre como entregar los productos que quieras donar"
            change={changeFilters}
            boolean={filters.products}
            name="products"
          />
        </SearchSelect>
      </div>
    </>
  )
}

export default FilterContainer
