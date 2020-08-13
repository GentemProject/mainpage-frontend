import React from 'react';
import { Layout, Alert } from 'antd';
import Logo from './svg/Logo';
import Heart from './svg/heart';
import * as styles from '../styles/header.module.scss';

function Header() {
  return (
    <>
      <div className={`${styles.layoutCenter} ${styles.fixed} ${styles.bg} `}>
        <Layout className={`${styles.headerContent} ${styles.layout}`}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              {/*   <Link to='/'> */}
              <Logo />
              {/*    </Link> */}
            </div>
            <div>
              <a href='https://gentem.typeform.com/to/qN1hfz' rel='noopener noreferrer' target={'_blank'}>
                <div className={styles.headerBtn}>
                  <span className={styles.headerBtnText}>
                    Únete a gentem
                    <Heart />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Layout>
      </div>
      <div className={styles.construction}>
        <Alert
          message='Aviso'
          description='El sitio está en construcción, algunas funciones pueden no estar activadas.'
          type='info'
          showIcon
          closable
        />
      </div>
    </>
  );
}

export default Header;
