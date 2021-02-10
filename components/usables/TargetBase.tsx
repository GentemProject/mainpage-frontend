import React from 'react'
import Target from './Target'
import * as style from '../../styles/lib/usables.module.scss'

function TargetBase(props: any) {
  const { array, filter, id } = props

  if (filter !== 0) {
    return (
      <div className={style.target}>
        <div className={style.targetGrid}>
          {filter.map((title: any) => {
            return <Target key={id} filtro={title} />
          })}
        </div>
      </div>
    )
  }
  return (
    <div className={style.target}>
      <div className={style.targetGrid}>
        {array.map((title: any) => {
          return <Target key={id} desc={title} />
        })}
      </div>
    </div>
  )
}
export default TargetBase
