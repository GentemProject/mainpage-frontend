import styles from './style.module.scss'
import { GentemIcon, Heart } from 'components/svg'
import LinkButton from 'components/utils/interactive/inputs/link'
function Invitation() {
  return (
    <div className={styles.invitation}>
      <div className={styles.content}>
        <h1>¿Eres una fundación, ONG o proyecto de carácter social?</h1>
        <p>
          Haz parte de gentem y mejora tus probabilidades de recibir donaciones.
        </p>
        <LinkButton
          href="/"
          className="border"
          size="m"
          label="Registrate"
          icon={<Heart />}
          color={{ color: '#fff', borderColor: '#fff' }}
        />
      </div>
      <div className={styles.logo}>
        <GentemIcon />
      </div>
    </div>
  )
}
export default Invitation