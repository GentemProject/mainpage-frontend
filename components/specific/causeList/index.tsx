import Banner from '@/components/utils/architecture/hero'
import Filter from './components/filter'
import ContenidoSider from './components/organizations'
import { Loader } from '@/components/utils/interactive/loader'

import styles from './style.module.scss'
import { organizationsProjects } from 'interfaces/organization'

function CauseList(props: {
  select
  filters
  data: organizationsProjects[]
  resetFilters
  /*   checkbox, */
  handleNextPage
  loading: boolean
}) {
  const { data, filters, handleNextPage, loading, resetFilters, select } = props
  const contentBanner = (
    <span className={styles.descBanner}>
      Encuentra la fundación, ONG o proyecto al que quieres apoyar
    </span>
  )
  return (
    <div className={styles.ongList}>
      <div className={styles.layoutCenter}>
        <div className={`${styles.ongListContent}`}>
          <Filter select={select} filters={filters} /* checkbox={checkbox} */ />
          {loading ? (
            <Loader />
          ) : (
            <ContenidoSider
              data={data}
              resetFilters={resetFilters}
              handleNextPage={handleNextPage}
              // Modal filter
              select={select}
              filters={filters}
              /*  checkbox={checkbox} */
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CauseList
