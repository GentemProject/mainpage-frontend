import { useEffect, useState } from 'react'
import Head from 'next/head'
import Container from '../../components/actualizacion de componentes/Container'
import Textarea from '../../components/usables/buttons/inputs/textarea'
import Text from '../../components/usables/buttons/inputs/text'
import Radio from '../../components/usables/buttons/inputs/radio'
function Testing() {
  const [changes, setChanges] = useState({
    area: '',
    inp: '',
    rad: '',
  })
  const [dis, setDis] = useState(true)
  const handleChange = (e) => {
    console.log(e.currentTarget)
    if (e.currentTarget.type === 'text') {
      setChanges({ area: changes.area, inp: e.target.value, rad: changes.rad })
    } else {
      setChanges({ area: e.target.value, inp: changes.inp, rad: changes.rad })
    }
  }

  const handleChangeForm = (e) => {
    setChanges({ area: changes.area, inp: changes.inp, rad: e.target.value })
  }
  const offDisabled = () => {
    setDis(dis ? false : true)
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
        <div>
          <form onChange={(e) => handleChangeForm(e)}>
            <Radio
              desc="radio"
              name="radios"
              value="si"
              checked={true}
              disabled={false}
            />
            <Radio
              desc="rad"
              name="radios"
              value="no"
              disabled={dis}
              checked={false}
            />
            <Radio
              desc="rada"
              name="radios"
              value="tal vez"
              disabled={false}
              checked={false}
            />
            <Radio
              desc="radas"
              name="radios"
              value="tal vez si o no"
              disabled={false}
              checked={false}
            />
            <Radio
              desc="radass"
              name="radios"
              value="tal vez si si o no no "
              disabled={false}
              checked={false}
            />
          </form>
        </div>
        <button onClick={offDisabled}>offDisabled</button>
        <h2>{changes.area}</h2>
        <h2>{changes.inp}</h2>
        <h2>{changes.rad}</h2>
      </Container>
    </>
  )
}
export default Testing
