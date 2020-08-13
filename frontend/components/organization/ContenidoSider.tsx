import { Layout, Divider, Button } from 'antd'
import React from 'react'
import * as styles from '../../styles/organization.module.scss'

const { Sider } = Layout
function ContenidoSider(props: any) {
  return (
    <Sider className={styles.ongProfileHowToDonate}>
      <ResponsiveDonate
        logo={props.logo}
        name={props.name}
        instructionstodeliverproducts={props.instructionstodeliverproducts}
        accounts={props.accounts}
        paymentslink={props.paymentslink}
      />
    </Sider>
  )
}
export default ContenidoSider

export function ResponsiveDonate({
  instructionstodeliverproducts,
  logo,
  name,
  accounts,
  paymentslink,
}: any) {
  return (
    <React.Fragment>
      {(instructionstodeliverproducts || paymentslink || accounts) && (
        <>
          <div className={styles.ongProfileUserModal}>
            <div className={styles.ongProfileUserModalImg}>
              {/* <img src={logo || Logo} alt='Logo de ONG' /> */}
              {logo ? (
                <img src={logo} alt="User 1" />
              ) : (
                <img src="/logoDefault.png" alt="" />
              )}
            </div>
            <div>
              <span className={styles.ongProfileUserModalTitle}>{name}</span>
            </div>
          </div>
          <div className={styles.ongProfileHowToDonateTitle}>
            <h3>¿Cómo donar?</h3>
          </div>
          {paymentslink && (
            <div className="OngProfile__HowToDonate--Donate">
              <>
                <h4 className="OngProfile__Donate--Title h4"> Dona Online </h4>
                <Divider className={styles.divider} />
                <a
                  href={paymentslink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="primary"
                    className={styles.ongProfileDonateButton}
                  >
                    Haz tu donación online
                  </Button>
                </a>
              </>
            </div>
          )}
          {accounts && (
            <div className={styles.howToDonateBank}>
              <h4 className="OngProfile__DonateWay--Bank h4">
                Consigna a una cuenta bancaria
              </h4>
              <Divider className={styles.divider} />
              <span className={`OngProfile__DonateWay--BankID ${styles.span}`}>
                {accounts}
              </span>
            </div>
          )}
          {instructionstodeliverproducts && (
            <div className={styles.ongProfileHowToDonateDonateProduct}>
              <h4 className="OngProfile__DonateProduct--Title h4">
                Haz una donación de productos
              </h4>
              <Divider className={styles.divider} />
              <div className="OngProfile__DonateProduct--DonateWay">
                <span className="span">{instructionstodeliverproducts}</span>
              </div>
            </div>
          )}
        </>
      )}
    </React.Fragment>
  )
}
