import { useState } from 'react'
import Head from 'next/head'
import Container from '../../components/actualizacion de componentes/Container'
import Textarea from '../../components/usables/buttons/inputs/textarea'
import Text from '../../components/usables/buttons/inputs/text'
function Testing() {
  const [changes, setChanges] = useState({
    area: '',
    inp: '',
  })
  const handleChange = (e) => {
    console.log(e.currentTarget)
    if (e.currentTarget.type === 'text') {
      setChanges({ area: changes.area, inp: e.target.value })
    } else {
      setChanges({ area: e.target.value, inp: changes.inp })
    }
  }
  return (
    <>
      <Head>
        <title>Testings</title>
      </Head>
      <Container>
        <Textarea
          desc="Ingrese algo textarea"
          onChange={(e) => handleChange(e)}
        />
        <Text desc="Ingrese algo inputText" onChange={(e) => handleChange(e)} />
        <h1>{changes.area}</h1>
        <h1>{changes.inp}</h1>
      </Container>
    </>
  )
}
export default Testing
