import styles from '../style.module.scss'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className="Banner__content--title">
          <h2>Encuentra y dona</h2>
        </div>
        <div className="Banner__content--subtitle">
          <h5>Encuentra la fundación, ONG o proyecto al que quieres apoyar</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner
