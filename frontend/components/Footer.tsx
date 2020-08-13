import React from 'react';
import { Layout } from 'antd';
import * as styles from '../styles/footer.module.scss';

function Footer() {
  return (
    <Layout>
      <Layout.Footer className={styles.footer}>
        <div className={styles.socialMedia}>
          <div>
            <a href='https://www.facebook.com/gentemorg' target='_blank' rel='noopener noreferrer'>
              <img className={styles.socialMediaIcon} src='/fb.svg' alt='facebook logo' />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/gentem_org/' target='_blank' rel='noopener noreferrer'>
              <img className={styles.socialMediaIcon} src='/insta.svg' alt='instagram logo' />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/gentem-org/' target='_blank' rel='noopener noreferrer'>
              <img className={styles.socialMediaIcon} src='/linkedIn.svg' alt='linkedin logo' />
            </a>
          </div>
        </div>
        <div className={styles.footerContact}>
          <span>
            ¿Tienes alguna duda? Contactanos en
            <span className='mail-color'>
              <a href='mailto:hola@gentem.org'> hola@gentem.org</a>
            </span>
          </span>
        </div>

        {/* <div className='language'>
            <div>Castellano</div>
            <span className='circle'></span>
            <div className='activate'>Ingles</div>
          </div> */}
      </Layout.Footer>
    </Layout>
  );
}

export default Footer;
