import styles from './style.module.scss'
import { PaypalIcon, ShapeIcon } from 'components/svg'
import LinkButton from 'components/utils/interactive/inputs/link'
function Donation() {
  return (
    <>
      <div className={styles.donation}>
        <div className={styles.content}>
          <h1>Apoya a gentem</h1>
          <p>Para seguir creciendo juntos, debemos apoyarnos.</p>
          <div className={styles.actions}>
            <PaypalIcon />
            <LinkButton
              label="Donar por PayPal"
              className="normal"
              size="m"
              href="/"
              color={{color: '#fff', backgroundColor: '#283593'}}
            />
          </div>
        </div>
        <div className={styles.glass}></div>
        <ShapeIcon className={styles.shape} />
        <ShapeIcon className={styles.shape} />
      </div>
    </>
  )
}
export default Donation
