import styles from './style.module.scss'
import LinkButton from 'components/utils/interactive/inputs/link'
import { HandsUnitedIcon } from 'components/svg'
function Support(): JSX.Element {
  return (
    <div className={styles.support}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            El aporte que hagas, por pequeño que te parezca, puede significar un
            día de comida para una familia.
          </h1>
          <LinkButton
            label="Apoya un proyecto"
            className="border"
            size="m"
            href="/projects"
            color={{ borderColor: '#fff', color: '#fff' }}
          />
        </div>

        <div className={styles.img}>
          <HandsUnitedIcon />
        </div>
      </div>
    </div>
  )
}
export default Support
