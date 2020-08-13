import React from 'react';
import * as styles from '../../styles/home/home.module.scss';
function Col(props: any) {
  return (
    <div className={styles.containerColabor}>
      <div className={styles.colaborar}>
        <div className={styles.texto}>
          <h4>{props.desc}</h4>
        </div>
        <div className={styles.btnFl}>
          <button className={styles.btnColab} style={{ background: props.colorBtn }}>
            <span>{props.btn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Col;
