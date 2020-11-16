import { Divider, Button } from '../../../usables/buttons'
import styles from '../style.module.scss'

function DonationData({ logo, name, bankAccount, donationLinks }) {
  return (
    <div className={styles.ongProfileHowToDonate}>
      <div>
        {(bankAccount || donationLinks) && (
          <ResponsiveDonate
            logo={logo}
            name={name}
            bankAccount={bankAccount}
            donationLinks={donationLinks}
          />
        )}
      </div>
    </div>
  )
}
export default DonationData

export function ResponsiveDonate({ logo, name, bankAccount, donationLinks }) {
  return (
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
      {donationLinks && (
        <div className="OngProfile__HowToDonate--Donate">
          <>
            <h4 className="OngProfile__Donate--Title h4"> Dona Online </h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <a href={donationLinks} target="_blank" rel="noopener noreferrer">
              <Button>
                <span> Haz tu donación online </span>
              </Button>
            </a>
          </>
        </div>
      )}
      {bankAccount && (
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
            {bankAccount}
          </span>
        </div>
      )}
      {/*       {donationProducts && (
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
            <span className="span">{donationProducts}</span>
          </div>
        </div>
      )} */}
    </>
  )
}
