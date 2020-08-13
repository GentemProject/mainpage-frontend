import React from 'react';
import * as styles from '../../styles/home/home.module.scss';

function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.imgBannerI}></div>
      <div className={styles.contentBanner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span>
              Ayuda a proyectos sociales que están trabajando con comunidades afectadas por el coronavirus en América
              Latina
            </span>
          </div>
          <div className={styles.btnBanner}>
            <button className={styles.btnHome}>
              <span>Ver todos los proyectos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
