import React, { useState, useEffect } from 'react'
import * as styles from '../../styles/home/home.module.scss'
function pos(b: string) {
  let a: string = b
  a = a + ''
  const c: number = a.length
  if (c === 4) {
    a = a.slice(0, 1) + '.' + a.slice(1)
  } else if (c === 5) {
    const z: string = a.slice(0, 2)
    const r: string = a.slice(2)
    a = z + '.' + r
  } else if (c === 6) {
    a = a.slice(0, 3) + '.' + a.slice(3)
  } else if (c === 7) {
    a = a.slice(0, 1) + '.' + a.slice(1, 4) + '.' + a.slice(4)
  } else if (c === 8) {
    a = a.slice(0, 2) + '.' + a.slice(2, 5) + '.' + a.slice(5)
  }
  return a
}
function sacarMes(a: any) {
  const mes = Array<string>(
    'Enero',
    'Febrero',
    'Marzo',
    'abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  )
  let b = ''
  if (a === 1) {
    b = mes[0]
  } else if (a === 2) {
    b = mes[1]
  } else if (a === 3) {
    b = mes[2]
  } else if (a === 4) {
    b = mes[3]
  } else if (a === 5) {
    b = mes[4]
  } else if (a === 6) {
    b = mes[5]
  } else if (a === 7) {
    b = mes[6]
  } else if (a === 8) {
    b = mes[7]
  } else if (a === 9) {
    b = mes[8]
  } else if (a === 10) {
    b = mes[9]
  } else if (a === 11) {
    b = mes[10]
  } else if (a === 12) {
    b = mes[11]
  }
  return b
}

function Stats() {
  const [cont, setCont] = useState<string>('0')
  const [rec, setRec] = useState<string>('0')
  const [f, setF] = useState<string>('0')
  const [date, setDate] = useState<any>()

  useEffect(() => {
    let d: any = new Date()
    const b: any = d.getMonth() + 1

    d = d.getDate() + ' de ' + sacarMes(b) + ' del ' + d.getFullYear()
    setDate(d)
    fetch('https://api.covid19api.com/world/total')
      .then((res) => res.json())
      .then(
        (result) => {
          setCont(pos(result.TotalConfirmed))
          setRec(pos(result.TotalRecovered))
          setF(pos(result.TotalDeaths))
        },

        (/* error */) => {
          /* console.log(error) */
        }
      )
  }, [])

  return (
    <div className={styles.containerStats}>
      <div className={styles.texto}>
        <h2>Esto no es una gripe cualquiera</h2>
      </div>
      <div className={styles.desc}>
        <p>
          A pesar de que muchos nos intentan convencer diciendo que este virus
          es más leve que una gripe, los datos demuestran que es mucho más
          agresivo.
        </p>
      </div>
      <div className={styles.resStats}>
        <div className={styles.result}>
          <div className={styles.colm3}>
            <ResCov res={cont} info="Casos confirmados" />
          </div>
          <div className={styles.colm3}>
            <ResCov res={rec} info="Recuperados" />
          </div>
          <div className={styles.colm3}>
            <ResCov res={f} info="Fallecidos" />
          </div>
        </div>
        <div className={styles.fuente}>
          <span>
            Datos actualizados el {date}, tomados de{' '}
            <a
              href="https://covid19api.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.covid19api.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
function ResCov(props: any) {
  return (
    <div className={styles.resCov}>
      <div className={styles.valor}>
        <span>{props.res}</span>
      </div>
      <div className={styles.resultInfo}>
        <span>{props.info}</span>
      </div>
    </div>
  )
}
export default Stats
