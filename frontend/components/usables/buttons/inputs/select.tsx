import { useState } from 'react'
import ReactModal from 'react-modal'
import * as styles from '../../../../styles/usable.module.scss'
ReactModal.setAppElement('#__next')
export const Selectt = ({ onClick, onChange, value, children }) => {
  const [select, setSel] = useState(false)
  const [val, setVal] = useState(undefined)
  const handleClick = () => {
    setSel((select) => (select ? false : true))
    console.log(select)
  }
  const handleVal = (e) => {
    console.log(e.target.value)
    setVal(e.target.value)
  }
  return (
    <>
      <div className={styles.containerSelect}>
        <div className={styles.select}>
          <div className={styles.boxSelect} onClick={handleClick}>
            {value}
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={select}
        className={styles.ReactModalContainer}
        
        role="select"
      >
        <div className={styles.modal}>
          <ul onClick={handleVal} onChange={onChange}>
            {children}
          </ul>
        </div>
   
      </ReactModal>
  
    </>
  )
}

export const Optionn = (props: any) => {
  return <li role="option" value={props.value}>{props.children}</li>
}
