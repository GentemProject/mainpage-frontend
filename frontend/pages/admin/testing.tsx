import Head from 'next/head'
import Container from '../../components/actualizacion de componentes/Container'
import Textarea from '../../components/usables/buttons/inputs/textarea'
import Text from '../../components/usables/buttons/inputs/text'
function Testing() {
  return (
    <>
      <Head>
        <title>Testings</title>
      </Head>
      <Container>
        <Textarea desc="Ingrese algo textarea" />
        <Text desc="Ingrese algo inputText" />
      </Container>
    </>
  )
}
export default Testing
