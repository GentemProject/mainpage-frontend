import Link from 'next/link'
// Cambiar y aislar componente luego
import styles from './style.module.scss'

function Banner(props) {
  const { height, img, desc, content } = props
  return (
    <div
      className={styles.hero}
      style={{
        height: height ? height : '500px',
        backgroundImage: img && `url(${img})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>{desc}</h1>
        </div>
        {content && content}
      </div>
    </div>
  )
}
export default Banner
