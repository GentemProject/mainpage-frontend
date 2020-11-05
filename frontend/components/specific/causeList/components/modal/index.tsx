import Filter from '../filter'
import styles from '../../style.module.scss'

function ModalContent(props: any) {
  const { changeSelect, changeFilters, filters } = props
  return (
    <div className={styles.ongListModal}>
      <div className={styles.ongListModalLogo}>
        <img src="/logoAnimado.svg" alt="logo" />
      </div>
      <Filter
        changeSelect={changeSelect}
        filters={filters}
        changeFilters={changeFilters}
      />
    </div>
  )
}

export default ModalContent
