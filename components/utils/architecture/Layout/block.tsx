import styles from './style.module.scss'
function Block(props: {
  className: string
  children: JSX.Element
}): JSX.Element {
  const { children, className } = props
  return <div className={`${styles.block} ${styles[className]}`}>{children}</div>
}
export default Block
