import React, { useState } from 'react'
import Close from '../svg/close'
import * as style from '../../styles/lib/usables.module.scss'

function Target(props: any) {
  const [estado, setEstado] = useState({
    display: 'flex',
  })
  const handleClose = () => {
    setEstado({ display: 'none' })
  }

  if (props.filtro) {
    return (
      <React.Fragment>
        <span className={style.targetSpan} style={estado}>
          {props.filtro}
          <span className={style.targetBtn} onClick={handleClose}>
            <Close />
          </span>
        </span>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <span className={style.targetSpan}>{props.desc} </span>
    </React.Fragment>
  )
}
export default Target
