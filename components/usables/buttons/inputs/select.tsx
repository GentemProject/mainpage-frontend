import React, { useEffect, useState, useCallback } from 'react'
import Modal from 'react-modal'
import * as styles from '../../../../styles/usable.module.scss'
Modal.setAppElement('#__next')
export const Select = ({ onChange, value, children, id }) => {
  const [select, setSel] = useState(false)
  const [val, setVal] = useState(undefined)
  const isRef = React.useRef(null)
  const [current, setCurrent] = useState({
    target: {
      value: value,
    },
  })

  const handleClick = (e) => {
    setSel(true)
  }
  const isBlur = () => {
    isRef.current.onselectstart = () => {
      return false
    }
    isRef.current.selectionEnd = 0
  }

  const handleVal = (e) => {
    const temp = { ...current }
    temp.target.value = e
    setCurrent(temp)
    onChange(current)
    setSel(false)
  }
  return (
    <div className={styles.containerSelect}>
      <div
        className={
          (current.target.value !== null && current.target.value !== '') ||
          select === true
            ? styles.select + ' ' + styles.activeSelect
            : styles.select
        }
      >
        <label htmlFor={'inp' + id}>
          <span>Ingrese region</span>
        </label>
        <input
          value={value}
          id={'inp' + id}
          onFocus={handleClick}
          onClick={isBlur}
          ref={isRef}
          readOnly
          type="text"
        />
      </div>
      <div
        className={select ? styles.extend + ' ' + styles.active : styles.extend}
      >
        <ul>{children(handleVal)}</ul>
      </div>
    </div>
  )
}

export const Option = ({ desc, value, val }) => {
  const r = React.useRef(null)
  const handleValue = () => {
    val(r.current.dataset.value)
  }
  return (
    <li
      className={styles.option}
      ref={r}
      data-value={value}
      onClick={handleValue}
    >
      <span>{desc}</span>
    </li>
  )
}

/*
 *
 *
 *          <li
            className={styles.option}
            onClick={(e) => handleVal(isRef.current.childNodes[0].value)}
            value="4"
          >
            <span>Papaeyda</span>
          </li>
          <li
            className={styles.option}
            onClick={(e) =>
              handleVal(isRef.current.childNodes[1].dataset.value)
            }
            data-value="24"
          >
            <span>P22apaeyda</span>
          </li>
          <li
            className={styles.option}
            //        onClick={handleLi}
            ref={refBack}
            data-value="9"
            onClick={han}
          >
            <span>El que tiene la solucion</span>
          </li>
          <li
            className={styles.option}
            // onClick={handleLi}
            ref={refBack}
            data-value="91"
            onClick={handleRef}
          >
            <span>El que tiene la solucion 2</span>
          </li>

 *
 * */
