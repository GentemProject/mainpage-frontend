import Banner from '@/components/utils/architecture/hero'
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
  const contentBanner = (
    <span className={styles.descBanner}>
      Encuentra la fundación, ONG o proyecto al que quieres apoyar
    </span>
  )
  return (
    <div className={styles.ongList}>
      <LayoutContainer
        scaped={
          <Banner
            img="../banner.jpg"
            desc="Encuentra y dona"
            height="400px"
            content={contentBanner}
          />
        }
      >
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
