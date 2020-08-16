import { useState } from 'react'

// Components
import SearchSelect from './SearchSelect'
import TextCheck from './TextCheck'

// Material UI for Select
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

// Style & Api test
import * as api from '../../api/categories.json'
import * as styles from '../../styles/onglist.module.scss'

function Contenido() {
  const [ciudad, setCiudad] = useState()
  const [comunidad, setComunidad] = useState()

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value)
  }
  const handleChangeComunidad = (event) => {
    setComunidad(event.target.value)
  }

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
              onChange={handleChangeCiudad}
            >
              <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
              <MenuItem value="Cali">Cali</MenuItem>
              <MenuItem value="Bogota">Bogota</MenuItem>
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
              value={comunidad}
              onChange={handleChangeComunidad}
            >
              {api.data.map((cat) => (
                <MenuItem key={cat.cat_id[0]} value={cat.cat_name}>
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
          <TextCheck title="Donar online" desc="Link para donar desde casa" />
          <TextCheck
            title="Transferencia bancaria"
            desc="Información de las cuentas para que hagas una transferencia"
          />
          <TextCheck
            title="Donar productos"
            desc="Información sobre como entregar los productos que quieras donar"
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
