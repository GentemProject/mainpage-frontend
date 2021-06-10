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
          className="normal"
          size="m"
          label="Registrate"
          icon={<Heart />}
          color={{ color: '#fff', backgroundColor: '#47398E' }}
        />
      </div>
      <div className={styles.logo}>
      
      </div>
    </div>
  )
}
export default Invitation
//  <GentemIcon color={'#ffcf53'} />