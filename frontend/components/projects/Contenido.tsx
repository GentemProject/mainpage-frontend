import { useState, useEffect } from 'react'

// Components
import SearchSelect from './SearchSelect'
import TextCheck from './TextCheck'

// Material UI for Select
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
//APi
import { getDistinct, getForFilters } from '../../api/filters'
// Style & Api test
import * as api from '../../api/categories.json'
import * as styles from '../../styles/onglist.module.scss'
interface filters {
  country: string
  products: boolean
  paymenData: boolean
  transfer: boolean
  community: number
}
function Contenido() {
  const [ciudad, setCiudad] = useState([])
  //const [resultfilters, setResultfilters ] = useState<any>()
  const [filters, setFilters] = useState<filters>({
    country: '',
    products: false,
    paymenData: false,
    transfer: false,
    community: 0,
  })
  const changeSelect = (motive: string, select: any) => {
    const temp = { ...filters }
    if (motive === 'country') {
      temp.country = select
    }
    if (motive === 'community') {
      temp.community = select
    }
    setFilters(temp)
  }
  const changeFilters = (res: boolean, motive: string) => {
    const temp = { ...filters }
    if (motive === 'products') {
      temp.products = res
    }
    if (motive === 'paymenData') {
      temp.paymenData = res
    }
    if (motive === 'transfer') {
      temp.transfer = res
    }
    setFilters(temp)
  }
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
  /*
  useEffect(()=>{
  
    getForFilters(filters).then((data)=>{
      setResultfilters(data)

    })
  
  }, [{...filters}])*/

  return (
    <div className={styles.ongListSearch}>
      <div className={styles.ongListSearchContainer}>
        <div className="container__info">
          <h6> Usa los filtros para encontrar proyectos que quieras apoyar </h6>
        </div>

        <SearchSelect
          title="Ubicación"
          info="Selecciona la ciudad en la que quieres que tu donación tenga efecto"
        >
          <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ciudad}
              onChange={(e) => {
                changeSelect('country', e.target.value)
              }}
            >
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
        <SearchSelect
          title="Comunidad afectada"
          info="Selecciona la comunidad a la que quieras apoyar"
        >
          <FormControl style={{ width: '100%', marginTop: '12px' }}>
            <InputLabel id="demo-simple-select-label">Comunidad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                changeSelect('community', e.target.value.toString())
              }}
            >
              {api.data.map((cat) => (
                <MenuItem key={cat.cat_id[0]} value={cat.cat_id[0]}>
                  {cat.cat_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SearchSelect>
        <SearchSelect
          title="Tipo de donación"
          info="Selecciona la forma en la que quieras donar"
        >
          <TextCheck
            title="Donar online"
            desc="Link para donar desde casa"
            change={changeFilters}
            name="paymenData"
          />
          <TextCheck
            title="Transferencia bancaria"
            desc="Información de las cuentas para que hagas una transferencia"
            change={changeFilters}
            name="transfer"
          />
          <TextCheck
            title="Donar productos"
            desc="Información sobre como entregar los productos que quieras donar"
            change={changeFilters}
            name="products"
          />
        </SearchSelect>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Contenido

export function ModalContent() {
  return (
    <div className={styles.ongListModal}>
      <div className={styles.ongListModalLogo}>
        <img src="/logoAnimado.svg" alt="logo" />
      </div>
      <Contenido />
    </div>
  )
}
