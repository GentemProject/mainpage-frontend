import Banner from '@/components/utils/architecture/hero'
import Filter from './components/filter'
import ContenidoSider from './components/organizations'
import LayoutContainer from '@/components/utils/architecture/Layout/container'

import styles from './style.module.scss'

function CauseList({
  select,
  filters,
  organizations,
  loading,
  resetFilters,
  checkbox,
}) {
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
            <Filter select={select} filters={filters} checkbox={checkbox} />
            <ContenidoSider
              organizations={organizations}
              resetFilters={resetFilters}
              loading={loading}
            />
          </div>
        </div>
      </LayoutContainer>
    </div>
  )
}

export default CauseList
