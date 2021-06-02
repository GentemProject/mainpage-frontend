import { useState, useEffect } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'

// SVG
import Message from '../../../svg/Message'
import Close from '../../../svg/close'

// Usables & Componentes
import { ResponsiveDonate } from '../donationData'
import { Button, Divider } from '../../../usables/buttons'
import TargetBase from '../../../usables/TargetBase'

// Styles
import styles from '../style.module.scss'
import { Organization } from 'interfaces/organization'

Modal.setAppElement('#__next')

function Contenido(props?: {
  name: Organization['name']
  description: Organization['description']
  logo: Organization['logoUrl']
  goal: Organization['goal']
  howItIsUsingDonations: Organization['howItIsUsingDonations']
  email: Organization['contactEmail']
  phone: Organization['contactPhone']
  whatsapp: Organization['whatsappPhone']
  website: Organization['contactWebsite']
  facebook: Organization['facebookUrl']
  instagram: Organization['instagramUrl']
  twitter: Organization['twitterUrl']
  bankAccount: Organization['donationBankAccountName']
  donationLinks: Organization['donationLinks']
  city: Organization['city']
  country: Organization['country']
  causes: Organization['causes']
}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const {
    name,
    description,
    logo,
    goal,
    howItIsUsingDonations,
    email,
    phone,
    whatsapp,
    website,
    facebook,
    instagram,
    /*   linkedIn, */
    twitter,
    bankAccount,
    donationLinks,
    /*     donationProducts, */
    city,
    country,
    causes,
    /*     sponsors, */
  } = props
  const filter = 0
  return (
    <div className={styles.ongProfileHero}>
      <div className="OngProfile__Hero--User">
        <div className={styles.ongProfileUserImgBreadcrumb}>
          <div className={styles.ongProfileUserImg}>
            {logo ? (
              <div
                style={{ backgroundImage: `url(${logo})` }}
                className={styles.ongProfileUserImg}
              />
            ) : (
              <div
                style={{ backgroundImage: `url(/logoDefault.png)` }}
                className={styles.ongProfileUserImg}
              />
            )}
          </div>
          <div className={styles.ongProfileUserBreadcrumb}>
            <Link href="/projects">
              <a>Proyectos </a>
            </Link>
            / {name}
          </div>
        </div>
        <div className={styles.ongProfileUserInfo}>
          <h2 className={styles.ongProfileInfoTitle}>{name}</h2>
          <div className="OngProfile__User--Objective">
            <p className={styles.ongProfileObjectiveDescription}>{goal}</p>
          </div>
          <TargetBase array={causes} filter={filter} />

          <h3 className={styles.ongProfileInfoDescription}>
            {/* We need to change that in the backend */}
            {description !== 'no description' && description}
          </h3>
        </div>

        {/* We need to change that in the backend */}
        {howItIsUsingDonations !== 'no how it is using donations' && (
          <div className={styles.ongProfileUserHowUseDonation}>
            <h3 className={styles.ongProfileHowUseDonationTitle}>
              ¿Cómo usamos las donaciones que recibimos?
            </h3>
            <p className={styles.ongProfileHowUseDonationDescription}>
              {howItIsUsingDonations}
            </p>
          </div>
        )}
        {/*         {sponsors[0] !== '' ? (
          <div className={styles.ongProfileUserSponsors}>
            <h4 className={styles.ongProfileSponsorsTitle}>Patrocinadores</h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileSponsorsContainer}>
              {sponsors.map((sponsor: any) => (
                <div key={sponsor} className={styles.ongProfileContainerImg}>
                  <img src={sponsor} alt={`Logo sponsor de ${name}`} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          false
        )} */}

        {(website || email || phone) && (
          <div className={styles.ongProfileHowToDonateContact}>
            <h4 className={styles.ongProfileContactTitle}> Contacto </h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileContactInfo}>
              {website && (
                <div className="OngProfile__Info-Web">
                  <strong>Website</strong> <br />
                  <span>
                    <a href={website} rel="noopener noreferrer" target="_blank">
                      {website}
                    </a>
                  </span>
                </div>
              )}
              {email && (
                <div className="OngProfile__Info-Email">
                  <strong>Email</strong> <br />
                  <span>
                    <a href={`mailto://${email}`}>{email}</a>
                  </span>
                </div>
              )}
              {phone && (
                <div className={styles.ongProfileInfoTel}>
                  <strong>Teléfono</strong> <br />
                  <span>{phone}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {(whatsapp || instagram || facebook || twitter) && (
          <div className={styles.ongProfileSocial}>
            <h4 className="OngProfile__Social--Title">Redes sociales</h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className="OngProfile__Social--Networks">
              {whatsapp && (
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/whatsapp.svg" alt="whatsapp logo" />
                </a>
              )}
              {instagram && (
                <a href={instagram} rel="noopener noreferrer" target="_blank">
                  <img src="/insta.svg" alt="instagram logo" />
                </a>
              )}
              {facebook && (
                <a href={facebook} rel="noopener noreferrer" target="_blank">
                  <img src="/fb.svg" alt="facebook logo" />
                </a>
              )}
              {twitter && (
                <a href={twitter} rel="noopener noreferrer" target="_blank">
                  <img src="/twitter.svg" alt="twitter logo" />
                </a>
              )}
              {/*     {linkedIn && (
                <a href={linkedIn} rel="noopener noreferrer" target="_blank">
                  <img src="/linkedIn.svg" alt="linkedin logo" />
                </a>
              )} */}
            </div>
          </div>
        )}
        {(city || country) && (
          <div className={styles.ongProfileUserAddress}>
            <h4 className={styles.ongProfileAddressTitle}> Área de trabajo </h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileAddressInfo}>
              <div className={styles.ongProfileInfoIcon}>
                <img src="/location.svg" alt="location icon" />
              </div>
              <div className="OngProfile__Info--Data">
                <span>
                  {country}, {city}
                </span>
              </div>
            </div>
          </div>
        )}

        {(bankAccount !== '' ||
          donationLinks[0] !==
            '') /* ||
          donationProducts !== '' */ && (
          <div className={styles.ongProfileFixedHowToDonate}>
            <div>
              <Button
                styleProp={{
                  width: '216px',
                  height: '48px',
                }}
                onClick={handleOpen}
              >
                <span> ¿Cómo donar? </span>
              </Button>
              <Modal
                isOpen={open}
                onRequestClose={handleClose}
                className={styles.ongProfileModal}
              >
                <button className={styles.modalClose} onClick={handleClose}>
                  <Close />
                </button>
                <div className="Modal__Active">
                  <ResponsiveDonate
                    logo={logo}
                    name={name}
                    bankAccount={bankAccount}
                    donationLinks={donationLinks}
                    /* donationProducts={donationProducts} */
                  />
                </div>
              </Modal>
              <Button
                styleProp={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '40px',
                  marginLeft: '24px',
                }}
              >
                <Message width="30px" height="40px" color="#fff" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Contenido
