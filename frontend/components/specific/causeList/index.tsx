import Banner from './components/Banner'
import Filter from './components/filter'
import ContenidoSider from './components/organizations'
import LayoutContainer from '@/components/utils/architecture/Layout/container'

import styles from './style.module.scss'

function CauseList(props) {
  const {
    changeFilters,
    changeSelect,
    filters,
    ONGs,
    proyectos,
    totalOrgFilter,
    quantity,
    button,
    visible,
    setFilters,
  } = props
  return (
    <div className={styles.ongList}>
      <Banner />
      <LayoutContainer>
        <div className={styles.layoutCenter}>
          <div className={`${styles.ongListContent}`}>
            <Filter
              changeFilters={changeFilters}
              changeSelect={changeSelect}
              filters={filters}
            />
            <ContenidoSider
              ONGs={ONGs}
              changeSelect={changeSelect}
              changeFilters={changeFilters}
              filters={filters}
              proyectos={proyectos}
              totalOrgFilter={totalOrgFilter}
              quantity={quantity}
              button={button}
              visible={visible}
              setFilters={setFilters}
            />
          </div>
        </div>
      </LayoutContainer>
    </div>
  )
}

export default CauseList
