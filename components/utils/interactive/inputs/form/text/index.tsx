import React from 'react'
import { useState } from 'react'
import { colores, useChange } from '../colores'
function Text({ onChange, desc }) {
  const [stat, setStat] = useState(false)
  const isRef = React.useRef(null)
  const changefocus = useChange(stat, isRef)

  const isfocus = () => {
    setStat(true)
  }
  const notFocus = () => {
    setStat(false)
  }
  return (
    <div className="containerText">
      <div className={changefocus ? 'content active' : 'content'}>
        <div className="input">
          <label htmlFor="text">
            <span>{desc}</span>
          </label>
          <input
            type="text"
            id="text"
            onChange={onChange}
            onFocus={isfocus}
            onBlur={notFocus}
            ref={isRef}
          />
        </div>
      </div>
      <style jsx>
        {`
          .containerText {
            display: flex;
            width: 350px;
            height: 50px;
            position: relative;
          }
          .content {
            border: 2px solid ${colores.gris};
            border-radius: 5px;
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 10px;
            align-items: center;
            transition: all 0.2s ease-out;
          }
          .active {
            border-color: ${colores.celeste};
          }
          .active label > span {
            transform: translate(10px, -30px);
            color: ${colores.celeste};
          }
          input[type='text'] {
            border: none;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            background: none;
            outline: none;
          }
          .input {
            display: flex;
            position: absolute;
            width: 100%;
          }
          label {
            border: none;
            margin: 0;
            padding: 0;
          }
          label > span {
            color: ${colores.gris};
            width: auto;
            display: flex;
            z-index: 3;
            user-select: none;
            cursor: pointer;
            font-weight: bold;
            background: white;
            padding: 0 5px;
            position: absolute;
            transition-duration: 0.2s;
            transition-property: transform, color;
          }
        `}
      </style>
    </div>
  )
}
export default Text
