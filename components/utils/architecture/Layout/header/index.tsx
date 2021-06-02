import { useEffect, useState, useRef } from 'react'
import styles from './style.module.scss'
import MenuUser from './menu-user'
import Logo from 'components/svg/Logo'
import MenuIcon from 'components/svg/menu'
import LinkButton from 'components/utils/interactive/inputs/link'
import Link from 'next/link'
function Header(props: { type?: string }): JSX.Element {
  const { type } = props
  const isRef = useRef(null)
  const user = false
  const [device, setDevice] = useState('')
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu((menu) => !menu)
  }
  useEffect(() => {
    function getScroll() {
      if (window.scrollY >= 500) {
        isRef.current.classList.add(styles.blur)
      } else {
        isRef.current.classList.remove(styles.blur)
      }
    }
    document.addEventListener('scroll', getScroll)
    return () => {
      document.removeEventListener('scroll', getScroll)
    }
  })
  useEffect(() => {
    function getWidth() {
      if (document.body.clientWidth > 1140) {
        setDevice('desktop')
      } else {
        setDevice('mobile')
      }
    }
    getWidth()
    document.addEventListener('resize', getWidth)
    return () => {
      document.removeEventListener('resize', getWidth)
    }
  }, [])
  return (
    <div
      ref={isRef}
      className={
        type === null ? `${styles.header}` : `${styles.header} ${styles[type]}`
      }
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo fill={type === 'solid' ? '#47398e' : '#fff'} />
          <Link href='/'><h3>{user ? user : 'gentem'}</h3></Link>
        </div>
        {device === 'desktop' ? (
          <div className={styles.actions}>
            {' '}
            <Links device={device} user={user} />
          </div>
        ) : (
          <button onClick={() => handleMenu()}>
            <MenuIcon />
          </button>
        )}
      </div>
      {device === 'mobile' && (
        <div
          className={
            menu ? `${styles.menuMobile} ${styles.active}` : styles.menuMobile
          }
        >
          <div className={styles.menu}>
            <Links />
          </div>
        </div>
      )}
    </div>
  )
}
function Links(props: { device?: string; user?: boolean }): JSX.Element {
  const { device, user } = props

  const elem = (
    <>
      <div className={styles.item}>
        <LinkButton
          size="s"
          className="simple"
          href="/util/preguntas-frecuentes"
          label="Ayuda"
          color={{ color: '#fff' }}
        />
      </div>
      <div className={styles.item}>
        <LinkButton
          size="s"
          className="simple"
          href="/nosotros"
          label="Nosotros"
          color={{ color: '#fff' }}
        />
      </div>
      <MenuUser />
    </>
  )
  return elem
}
export default Header
