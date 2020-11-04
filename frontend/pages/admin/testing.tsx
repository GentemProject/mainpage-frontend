import { useEffect, useState } from 'react'
import Head from 'next/head'
import Container from '@/components/utils/architecture/Layout/container'
import Textarea from '../../components/utils/interactive/inputs/form/textarea/textarea'
import Text from '@/components/utils/interactive/inputs/form/text'
import Radio from '../../components/utils/interactive/inputs/form/radio'
import {
  Select,
  Option,
} from '../../components/utils/interactive/inputs/form/select'

function Testing() {
  const [changes, setChanges] = useState({
    area: '',
    inp: '',
    rad: '',
    sel: '',
  })
  const [dis, setDis] = useState(true)
  const handleChange = (e) => {
    console.log(e.currentTarget)
    if (e.currentTarget.type === 'text') {
      setChanges({
        area: changes.area,
        inp: e.target.value,
        rad: changes.rad,
        sel: changes.sel,
      })
    } else {
      setChanges({
        area: e.target.value,
        inp: changes.inp,
        rad: changes.rad,
        sel: changes.sel,
      })
    }
  }

  const handleChangeForm = (e) => {
    setChanges({
      area: changes.area,
      inp: changes.inp,
      rad: e.target.value,
      sel: changes.sel,
    })
  }
  const offDisabled = () => {
    setDis(dis ? false : true)
  }
  const handleSelect = (e) => {
    console.log(e)
    setChanges({
      area: changes.area,
      inp: changes.inp,
      rad: changes.rad,
      sel: e.target.value,
    })
    console.log('esto es el valor del select', e.target.value)
  }
  return (
    <>
      <Head>
        <title>Testings</title>
      </Head>
      <Container>
        {/*
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
        <Select/>

        <h2>{changes.area}</h2>
        <h2>{changes.inp}</h2>
        <h2>{changes.rad}</h2>
           */}
        <Select
          // cambia el label que me tira error paadre
          label="asd"
          onChange={handleSelect}
          value={changes.sel}
          id="puto"
        >
          {(val) => (
            <>
              <Option desc="vamo nwelll" value="1" val={val} />
              <Option desc="puede ser pa" value="2" val={val} />
              <Option desc="tal vez" value="3" val={val} />
              <Option desc="depende" value="4" val={val} />
              <Option desc="a veces no" value="5" val={val} />
              <Option desc="ahora si" value="6" val={val} />
              <Option desc="antes no andaba" value="7" val={val} />
              <Option desc="no atiendo boludos" value="8" val={val} />
              <Option desc="y va el tercero" value="9" val={val} />
              <Option desc="gol del pity" value="10" val={val} />
              <Option desc="tal vez si si o no no" value="11" val={val} />
            </>
          )}
        </Select>
        <h2>
          <span>{changes.sel}</span>
        </h2>
      </Container>
    </>
  )
}
export default Testing
