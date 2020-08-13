import { Layout, Select } from 'antd'
import React from 'react'
import SearchSelect from './SearchSelect'
import TextCheck from './TextCheck'
import * as api from '../../api/categories.json'
import * as styles from '../../styles/onglist.module.scss'

const { Option } = Select
const { Content } = Layout

function Contenido(props: any) {
  const select = props.select

  return (
    <Content className={styles.ongListSearch}>
      <div className={styles.ongListSearchContainer}>
        <div className="container__info">
          <h6> Usa los filtros para encontrar proyectos que quieras apoyar </h6>
        </div>
        <SearchSelect
          title="Ubicación"
          info="Selecciona la ciudad en la que quieres que tu donación tenga efecto"
        >
          <Select
            defaultValue="Selecciona una ciudad"
            style={{ width: '100%' }}
            onChange={select}
          >
            <Option value="Buenos Aires">Buenos Aires</Option>
            <Option value="Cali">Cali</Option>
            <Option value="Bogota">Bogota</Option>
          </Select>
        </SearchSelect>
        <SearchSelect
          title="Comunidad afectada"
          info="Selecciona la comunidad a la que quieras apoyar"
        >
          <Select
            defaultValue="Selecciona una comunidad"
            style={{ width: '100%' }}
            onChange={select}
          >
            {api.data.map((cat) => (
              <Option key={cat.cat_id[0]} value={cat.cat_name}>
                {cat.cat_name}
              </Option>
            ))}
          </Select>
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
    </Content>
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
