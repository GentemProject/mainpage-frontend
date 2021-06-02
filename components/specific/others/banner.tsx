import styles from './style.module.scss'
function Banner(props: { title: string }): JSX.Element {
  const { title } = props
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
    </div>
  )
}
export default Banner
