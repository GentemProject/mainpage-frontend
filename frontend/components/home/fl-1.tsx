import React from 'react';
import * as styles from '../../styles/home/home.module.scss';
function Fl(props: any) {
  return <div className={styles.fl1}>{props.children}</div>;
}

export default Fl;
