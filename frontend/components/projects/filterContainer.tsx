// Components
import SearchSelect from './SearchSelect'
// Style
import style from '../../styles/organizationList/organizationList.module.scss'
import { TextCheck } from '../../components/usables/buttons/inputs/switch'

function FilterContainer(props: any) {
  const { changeFilters, filters, changeSelect } = props
  return (
    <>
      <div className={style.filterContainer}>
        <div className={style.description}>
          <h6>
            Usa los filtros para encontrar las organizaciones que quieras apoyar
          </h6>
        </div>
        <SearchSelect title="Ubicación" info="Filtra por país">
          El select de uri
        </SearchSelect>
        <SearchSelect title="Causa afectada" info="Filtra por causa">
          Select de uri
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
