import Filter from '../filter'
import styles from '../../style.module.scss'

function ModalContent(props: any) {
  const { select, filters, checkbox } = props
  return (
    <div className={styles.ongListModal}>
      <div className={styles.ongListModalLogo}>
        <img src="/logoAnimado.svg" alt="logo" />
      </div>
      <Filter select={select} filters={filters} />
    </div>
  )
}

export default ModalContent
