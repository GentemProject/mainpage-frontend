import { Switch } from 'antd'
import React from 'react'

function onChange(/* checked: any */) {
  /*   console.log(`switch to ${checked}`) */
}

function textCheck(props: any) {
  return (
    <div className="textCheck">
      <div className="textCheck__top">
        <h6>{props.title}</h6>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="textCheck__bottom">{props.desc}</div>
    </div>
  )
}
export default textCheck
