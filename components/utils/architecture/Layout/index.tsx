import Header from './header'
import Footer from './footer'
import Container from './container'
function Layout(props: { children: JSX.Element }): JSX.Element {
  const { children } = props
  return (
    <>
      <Header type="transparent" />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
export default Layout
