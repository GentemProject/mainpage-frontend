import * as styles from '../../styles/home/home.module.scss'

function Container(props: any) {
  return <div className={styles.contenedor}>{props.children}</div>
}
export default Container
