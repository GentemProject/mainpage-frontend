import React from 'react'
import * as styles from '../../styles/loader.module.scss'

function Loader() {
  return (
    <>
      {window.scroll(0, 0)}
      <div className={styles.loader}></div>
    </>
  )
}
export default Loader
