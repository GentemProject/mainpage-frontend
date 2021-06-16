import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Close } from 'components/svg'
import Button from 'components/utils/interactive/inputs/buttons/primary'

function PrideMonth(): JSX.Element {
  const [expand, setExpand] = useState(false)
  useEffect(() => {
    console.log(expand)
  }, [expand])
  return (
    <div
      className={
        expand ? `${styles.pridemonth} ${styles.expanded}` : styles.pridemonth
      }
    >
      <div
        style={{ backgroundImage: 'url(/lines.png)' }}
        className={styles.flag}
      >
        <div className={styles.content}>
          <div
            className={
              expand ? `${styles.preview} ${styles.fundido}` : styles.preview
            }
          >
            <h1>Mes del orgullo</h1>
            <p>
              gentem apoya a cada organismo y movimiento que promueva la
              libertad.
            </p>
            <Button onClick={() => setExpand(true)} label="ver" />
          </div>
          <div
            className={
              expand
                ? `${styles.historySection} ${styles.visible}`
                : styles.historySection
            }
          >
            <div onClick={() => setExpand(!expand)}>
              <h1></h1>
              <Close />
            </div>
            <div className={styles.parragraph}>
              <h2>¿Qué significa?</h2>
              <p>
                El Día Internacional del Orgullo LGBT+ (lesbiana, gay, bisexual
                y transexual), también conocido como Día del Orgullo Gay se
                celebra cada año el 28 de junio y consiste en una serie de
                eventos que los distintos colectivos realizan públicamente para
                luchar por la igualdad y la dignidad de las personas gays,
                lesbianas, bisexuales y transexuales.
              </p>
              <h2>¿Qué significa?</h2>
              <p>
                El Día Internacional del Orgullo LGBT+ (lesbiana, gay, bisexual
                y transexual), también conocido como Día del Orgullo Gay se
                celebra cada año el 28 de junio y consiste en una serie de
                eventos que los distintos colectivos realizan públicamente para
                luchar por la igualdad y la dignidad de las personas gays,
                lesbianas, bisexuales y transexuales.
              </p>
              <h2>¿Qué significa?</h2>
              <p>
                El Día Internacional del Orgullo LGBT+ (lesbiana, gay, bisexual
                y transexual), también conocido como Día del Orgullo Gay se
                celebra cada año el 28 de junio y consiste en una serie de
                eventos que los distintos colectivos realizan públicamente para
                luchar por la igualdad y la dignidad de las personas gays,
                lesbianas, bisexuales y transexuales.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.glass}></div>
      </div>
    </div>
  )
}
export default PrideMonth
