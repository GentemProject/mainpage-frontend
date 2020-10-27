import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import * as styles from '../../../../styles/usable.module.scss'
Modal.setAppElement('#__next')
export const Selectt = ({ onClick, onChange, value, children }) => {
  const [select, setSel] = useState(false)
  const [val, setVal] = useState(undefined)
  const handleClick = (e) => {
    setSel(select ? false : true)
  }
  useEffect(() => {
    console.log(select)
  }, [select])
  const handleVal = (e) => {
    console.log(e.target.value)
    setVal(e.target.value)
  }
  return (
    <>
      <div
        className={styles.containerSelect}
        style={{ background: select === true ? 'green' : 'red' }}
      >
        <div className={styles.select}>
          <div className={styles.boxSelect} onClick={handleClick}>
            {value}
          </div>
        </div>
      </div>
      <Modal
        isOpen={select}
        className={styles.reactModalContainer}
        portalClassName={styles.reactOverlay}
        overlayClassName={styles.reactOverlay}
        bodyOpenClassName={styles.modalOpen}
        role="select"
      >
        <div className={styles.modal}>
          <ul onClick={handleVal} onChange={onChange}>
            {children}
          </ul>
        </div>
      </Modal>
    </>
  )
}

export const Optionn = (props: any) => {
  return (
    <li role="option" value={props.value}>
      {props.children}
    </li>
  )
}
