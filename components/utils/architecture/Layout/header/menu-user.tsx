import styles from './style.module.scss'
import LinkButton from 'components/utils/interactive/inputs/link'
import { Heart } from 'components/svg'
function MenuUser(props: { color: any }): JSX.Element {
  const { color } = props
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
            color={{ color: color.color }}
          />
          <LinkButton
            size="s"
            className="border"
            href="/"
            label="Registra tu proyecto"
            icon={<Heart fill={color.color} />}
            color={{ borderColor: color.color, color: color.color }}
          />
        </>
      )}
    </div>
  )
}
export default MenuUser
