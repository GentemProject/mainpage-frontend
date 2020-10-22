import Header from './Header'
import Footer from './Footer'
import style from './Layout.module.scss'

function Layout(props: any) {
  return (
    <>
      <Header />
      <div className={style.children}>{props.children}</div>
      <Footer />
    </>
  )
}
export default Layout
