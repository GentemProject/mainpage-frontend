import { Divider, Button } from '../usables/buttons'
import * as styles from '../../styles/organization.module.scss'

function ContenidoSider(props: any) {
  return (
    <div className={styles.ongProfileHowToDonate}>
      <div>
        {props.paymentData !== undefined ? (
          <ResponsiveDonate
            logo={props.logo}
            name={props.name}
            paymentData={props.paymentData}
          />
        ) : (
          false
        )}
      </div>
    </div>
  )
}
export default ContenidoSider

export function ResponsiveDonate(props, { logo, name, paymentData }: any) {
  console.log(props, 'ndea')
  return (
    <>
      {props.paymentData !== undefined ? (
        <>
          <div className={styles.ongProfileUserModal}>
            <div className={styles.ongProfileUserModalImg}>
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
          {props.paymentData.link !== undefined ? (
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
          ) : (
            false
          )}
          {props.paymentData.bankAccount !== undefined ? (
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
          ) : (
            false
          )}
          {props.paymentData.products !== undefined ? (
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
          ) : (
            false
          )}
        </>
      ) : (
        false
      )}
    </>
  )
}
