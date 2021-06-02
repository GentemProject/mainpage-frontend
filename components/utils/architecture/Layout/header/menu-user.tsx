import styles from './style.module.scss'
import LinkButton from 'components/utils/interactive/inputs/link'
function MenuUser() {
  const user = false
  return (
    <div className={styles.auth}>
      {user ? (
        <>menu usuario</>
      ) : (
        <>
          <LinkButton
            size="s"
            className="simple"
            href="/"
            label="Ingresar"
            color={{ color: '#fff' }}
          />
          <LinkButton
            size="s"
            className="border"
            href="/"
            label="Registra tu proyecto"
            color={{ borderColor: '#fff', color: '#fff' }}
          />
        </>
      )}
    </div>
  )
}
export default MenuUser
