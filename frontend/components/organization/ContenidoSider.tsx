import { Divider, Button } from '../usables/buttons'
import * as styles from '../../styles/organization.module.scss'

function ContenidoSider(props: any) {
  return (
    <div className={styles.ongProfileHowToDonate}>
      <div>
        {props.paymentData && (
          <ResponsiveDonate
            logo={props.logo}
            name={props.name}
            paymentData={props.paymentData}
          />
        )}
      </div>
    </div>
  )
}
export default ContenidoSider

export function ResponsiveDonate(props) {
  return (
    <>
      {props.paymentData && (
        <>
          <div className={styles.ongProfileUserModal}>
            <div className={styles.ongProfileUserModalImg}>
              {props.logo ? (
                <img src={props.logo} alt="User 1" />
              ) : (
                <img src="/logoDefault.png" alt="" />
              )}
            </div>
            <div>
              <span className={styles.ongProfileUserModalTitle}>
                {props.name}
              </span>
            </div>
          </div>
          <div className={styles.ongProfileHowToDonateTitle}>
            <h3>¿Cómo donar?</h3>
          </div>
          {props.paymentData.link && (
            <div className="OngProfile__HowToDonate--Donate">
              <>
                <h4 className="OngProfile__Donate--Title h4"> Dona Online </h4>
                <Divider
                  styleProp={{
                    margin: '12px 0',
                  }}
                />
                <a
                  href={props.paymentData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <span> Haz tu donación online </span>
                  </Button>
                </a>
              </>
            </div>
          )}
          {props.paymentData.bankAccount && (
            <div className={styles.howToDonateBank}>
              <h4 className="OngProfile__DonateWay--Bank h4">
                Consigna a una cuenta bancaria
              </h4>
              <Divider
                styleProp={{
                  margin: '12px 0',
                }}
              />
              <span className={`OngProfile__DonateWay--BankID ${styles.span}`}>
                {props.paymentData.bankAccount}
              </span>
            </div>
          )}
          {props.paymentData.products && (
            <div className={styles.ongProfileHowToDonateDonateProduct}>
              <h4 className="OngProfile__DonateProduct--Title h4">
                Haz una donación de productos
              </h4>
              <Divider
                styleProp={{
                  margin: '12px 0',
                }}
              />
              <div className="OngProfile__DonateProduct--DonateWay">
                <span className="span">{props.paymentData.products}</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
