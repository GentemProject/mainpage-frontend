import Link from 'next/link'
// Cambiar y aislar componente luego
import styles from './style.module.scss'

function Banner(props: string) {
  const { height, img, desc, content } = props
  return (
    <div
      className={styles.containerBanner}
      style={{
        height: height ? height : '500px',
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <span>{desc}</span>
        </div>
        {content && content}
      </div>
    </div>
  )
}
export default Banner
