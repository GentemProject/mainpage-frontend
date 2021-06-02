import styles from '../style.module.scss'
function Paragraph(props: {
  title: string
  children: JSX.Element
  id: string

}): JSX.Element {
  const { title, children, id } = props
  return (
    <div className={styles.paragraph} id={id}>
      <a href={`#${id}`}><h1>{title}</h1></a>
      {children}
    </div>
  )
}
export default Paragraph
