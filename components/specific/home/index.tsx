import Hero from 'components/utils/architecture/hero'
import Colab from './colaboration/colaboracion'
import Stats from './stats/stats'
import Info from './info/info-home'
import Nos from './about/nosotros-home'
import Ongs from 'components/utils/interactive/recentOng/'
import Contribuir from './colaboration/contribuir'
import styles from './style.module.scss'
import LinkButton from 'components/utils/interactive/inputs/link'
import LastProjects from './lastProjects'
function Content(props: { query: any }): JSX.Element {
  const { query } = props
  const contentBanner = (
    <LinkButton
      href="/projects"
      label="Ver todos los proyectos"
      className="normal"
      size="m"
    />
  )
  const g = (
    <>
      <strong>gentem </strong>es un directorio abierto de organizaciones sin
      ánimo de lucro que trabajan para mejorar el mundo en el que vivimos.
      Puedes buscarlas por ubicación, causa por la que trabajan, y formas de
      donar.
    </>
  )
  const test = [
    {
      src: '/logoDefault.png',
      alt: 'gentem',
      title: 'gentem',
      desc: 'gentem es un directorio abierto',
      href: '/',
    },
    {
      src: '/banner.jpg',
      alt: 'banner',
      title: 'banner',
      desc: 'gentem es un directorio banner',
      href: '/',
    },
    {
      src: '/poverty.png',
      alt: 'aa',
      title: 'pprrrrr',
      desc: 'gentem es un rererer banner',
      href: '/',
    },
    {
      src: '/logoDefault.png',
      alt: 'gentem',
      title: 'gentem',
      desc: 'gentem es un directorio abierto',
      href: '/',
    },
    {
      src: '/banner.jpg',
      alt: 'banner',
      title: 'banner',
      desc: 'gentem es un directorio banner',
      href: '/',
    },
    {
      src: '/poverty.png',
      alt: 'aa',
      title: 'pprrrrr',
      desc: 'gentem es un rererer banner',
      href: '/',
    },
  ]
  return (
    <>
      <Hero
        content={contentBanner}
        desc="Descubre las organizaciones que trabajan por un futuro mejor"
      />
      <LastProjects projects={test} />
      <Colab desc={g} btn="¡Apoya a una organización!" colorBtn=" #237ed5" />
      <Info />
      <Colab
        desc="El aporte que hagas, por pequeño que te parezca, puede significar un día de comida para una familia."
        btn="¡Ayuda ya!"
        colorBtn="#F44B53"
      />
      <Stats />

      <Nos />
      {query.loading ? (
        'Cargando...'
      ) : (
        <Ongs ongs={query.data.getOrganizations} />
      )}

      <Contribuir />
    </>
  )
}
export default Content
