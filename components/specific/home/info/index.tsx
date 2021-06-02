import styles from './style.module.scss'
import { PeopleIcon, HandsUpIcon, HumanIcon } from 'components/svg'
function Info(): JSX.Element {
  return (
    <div className={styles.component}>
      <div className={styles.info}>
        <Item
          title="La extrema pobreza nos amenaza"
          desc="Con la ayuda de cada uno de nosotros, por pequeña que sea, podemos darle a alguien un respiro en estos tiempos de incertidumbre, y la esperanza de un manaña mejor."
          img={<HumanIcon />}
        />
        <Item
          title="La extrema pobreza nos amenaza"
          desc="Con la ayuda de cada uno de nosotros, por pequeña que sea, podemos darle a alguien un respiro en estos tiempos de incertidumbre, y la esperanza de un manaña mejor."
          img={<HandsUpIcon />}
        />
        <Item
          title="La extrema pobreza nos amenaza"
          desc="Queremos que tu ayuda llegue a la población que realmente quieres impactar, por ende hemos realizado un trabajo exhaustivo para verificar las fundaciones que encontrás en gentem."
          img={<PeopleIcon />}
        />
      </div>
    </div>
  )
}
function Item(props: {
  title: string
  desc: string
  img: JSX.Element
}): JSX.Element {
  const { title, desc, img } = props
  return (
    <div className={styles.item}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <div className={styles.line}></div>
        <p>{desc}</p>
      </div>
      <div className={styles.image}>{img}</div>
    </div>
  )
}
export default Info
