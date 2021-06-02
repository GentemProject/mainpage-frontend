import styles from '../style.module.scss'
function Paragraph (props: {title: string; p: string}): JSX.Element {
const {title, p} = props
  return(
    <div className={styles.paragraph}>
    <h1>{title}</h1>
    <p>{p}</p>
    </div>
  )
}
export default Paragraph
