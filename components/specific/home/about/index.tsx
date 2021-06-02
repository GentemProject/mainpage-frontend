import styles from './style.module.scss'
import { HeartBorderIcon, LupaIcon, HandsHeartIcon } from 'components/svg'
import LinkButton from 'components/utils/interactive/inputs/link'
function About(): JSX.Element {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>Como funciona gentem</h1>
        <div className={styles.list}>
          <Item
            img={<LupaIcon />}
            desc="Elige la ubicación y la comunidad que quieres impactar con el tipo de donación que quieras brindar"
          />
          <Item
            img={<HeartBorderIcon />}
            desc="De acuerdo al filtro que hayas realizado, selecciona entre el perfil de cada una de las fundaciones que te presentamos"
          />
          <Item
            img={<HandsHeartIcon />}
            desc="Cuando elijas la fundación que quieres impactar, realiza tu donación mediante los diferentes métodos presentados"
          />
        </div>
        <div className={styles.actions}>
          {' '}
          <LinkButton
            href="/projects"
            size="m"
            label="Ayuda ya"
            className="normal"
            color={{ color: '#fff', backgroundColor: '#47398E' }}
          />
        </div>
      </div>
    </div>
  )
}
function Item(props: {
  title?: string
  img: JSX.Element
  desc: string
}): JSX.Element {
  const { title, img, desc } = props
  return (
    <div className={styles.item}>
      <div className={styles.img}>{img}</div>
      <p>{desc}</p>
    </div>
  )
}
export default About
