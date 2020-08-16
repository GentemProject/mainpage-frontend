import { Divider, Button } from '../usables/buttons'
import * as styles from '../../styles/organization.module.scss'

function ContenidoSider(props: any) {
  return (
    <div className={styles.ongProfileHowToDonate}>
      <div>
        <ResponsiveDonate
          logo={props.logo}
          name={props.name}
          instructionstodeliverproducts={props.instructionstodeliverproducts}
          accounts={props.accounts}
          paymentslink={props.paymentslink}
        />
      </div>
    </div>
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
    <>
      {(instructionstodeliverproducts || paymentslink || accounts) && (
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
          {paymentslink && (
            <div className="OngProfile__HowToDonate--Donate">
              <>
                <h4 className="OngProfile__Donate--Title h4"> Dona Online </h4>
                <Divider
                  styleProp={{
                    margin: '12px 0',
                  }}
                />
                <a
                  href={paymentslink}
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
          {accounts && (
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
                {accounts}
              </span>
            </div>
          )}
          {instructionstodeliverproducts && (
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
                <span className="span">{instructionstodeliverproducts}</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
