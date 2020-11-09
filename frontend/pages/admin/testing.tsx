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
import Button from '@/components/utils/interactive/inputs/buttons/primary'
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
        <div className="content">
          <Button desc="Ingrese text" color="#237ed5" width="250px" />
          <style jsx>
            {`
              .content {
                height: 600px;
                display: grid;
                place-items: center;
              }
            `}
          </style>
        </div>
      </Container>
    </>
  )
}
export default Testing
