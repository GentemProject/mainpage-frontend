import React from 'react';
const iSearch: string = '/search.svg';
const iHelp: string = '/help.svg';
const iSelect:string = '/select.svg';
import * as styles from '../../styles/home/home.module.scss';
function Noshome() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.texto}>
        <h2>Como funciona gentem</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.colm3}>
          <div className={styles.about}>
            <div className={styles.containerImg}>
              <div className={styles.img}>
                <img src={iSearch} alt='' />
              </div>
            </div>
            <div className={styles.tit}>
              <span>Busca entre las fundaciones</span>
            </div>
            <div className={styles.desc}>
              <p>Elige la ubicación y la comunidad que quieres impactar con el tipo de donación que quieras brindar</p>
            </div>
          </div>
        </div>

        <div className={styles.colm3}>
          <div className={styles.about}>
            <div className={styles.containerImg}>
              <div className={styles.img}>
                <img src={iSelect} alt='' />
              </div>
            </div>
            <div className={styles.tit}>
              <span>Selecciona la que más te guste</span>
            </div>
            <div className={styles.desc}>
              <p>
                De acuerdo al filtro que hayas realizado, selecciona entre el perfil de cada una de las fundaciones que
                te presentamos
              </p>
            </div>
          </div>
        </div>
        <div className={styles.colm3}>
          <div className={styles.about}>
            <div className={styles.containerImg}>
              <div className={styles.img}>
                <img src={iHelp} alt='' />
              </div>
            </div>
            <div className={styles.tit}>
              <span>Ayuda como puedas</span>
            </div>
            <div className={styles.desc}>
              <p>
                Cuando elijas la fundación que quieres impactar, realiza tu donación mediante los diferentes métodos
                presentados
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnFl}>
        <button className={styles.btnColab} style={{ background: '#237ed5' }}>
          <span>Ayudar ahora</span>
        </button>
      </div>
    </div>
  );
}
export default Noshome;
