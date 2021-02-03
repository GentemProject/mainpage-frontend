import { useState, useEffect } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'

// SVG
import Message from '../svg/Message'
import Close from '../svg/close'

// Usables & Componentes
import { ResponsiveDonate } from './ContenidoSider'
import { Button, Divider } from '../usables/buttons'
import TargetBase from '../usables/TargetBase'
import { useAllCategories } from '../usables/useCategories'

// Styles
import styles from './organization.module.scss'

Modal.setAppElement('#__next')

function Contenido(props: any) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [causeArray, setCauseArray] = useState<any>([])

  const { causeId } = props
  useEffect(() => {
    useAllCategories({ setCauseArray, causeId })
  }, [causeId])

  const filter = 0
  return (
    <div className={styles.ongProfileHero}>
      <div className="OngProfile__Hero--User">
        <div className={styles.ongProfileUserImgBreadcrumb}>
          <div className={styles.ongProfileUserImg}>
            {props.logo ? (
              <div
                style={{ backgroundImage: `url(${props.logo})` }}
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
            / {props.name}
          </div>
        </div>
        <div className={styles.ongProfileUserInfo}>
          <h2 className={styles.ongProfileInfoTitle}>{props.name}</h2>
          <div className="OngProfile__User--Objective">
            <p className={styles.ongProfileObjectiveDescription}>
              {props.objetive}
            </p>
          </div>
          <TargetBase array={causeArray} filter={filter} />

          <h3 className={styles.ongProfileInfoDescription}>
            {props.description}
          </h3>
        </div>
        {props.howusedonation && (
          <div className={styles.ongProfileUserHowUseDonation}>
            <h3 className={styles.ongProfileHowUseDonationTitle}>
              ¿Cómo usamos las donaciones que recibimos?
            </h3>
            <p className={styles.ongProfileHowUseDonationDescription}>
              {props.howusedonation}
            </p>
          </div>
        )}

        {/*         {props.sponsors.length !== 0 ? (
          <div className={styles.ongProfileUserSponsors}>
            <h4 className={styles.ongProfileSponsorsTitle}>Patrocinadores</h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileSponsorsContainer}>
              {props.sponsors.map((sponsor: any) => (
                <div key={sponsor} className={styles.ongProfileContainerImg}>
                  <img src={sponsor} alt="Logo sponsor" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          false
        )}
 */}
        {props.contact && (
          <div className={styles.ongProfileHowToDonateContact}>
            <h4 className={styles.ongProfileContactTitle}> Contacto </h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileContactInfo}>
              {props.contact.website && (
                <div className="OngProfile__Info-Web">
                  <strong>Website</strong> <br />
                  <span className="gtm-websiteClick">
                    <a
                      href={props.contact.website}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {props.contact.website}
                    </a>
                  </span>
                </div>
              )}
              {props.contact.email && (
                <div className="OngProfile__Info-Email">
                  <strong>Email</strong> <br />
                  <span className="gtm-emailClick">
                    <a href={`mailto://${props.contact.email}`}>
                      {props.contact.email}
                    </a>
                  </span>
                </div>
              )}
              {props.contact.phones && (
                <div className={styles.ongProfileInfoTel}>
                  <strong>Teléfono</strong> <br />
                  <span>{props.contact.phones}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {props.socialMedia && (
          <div className={styles.ongProfileSocial}>
            <h4 className="OngProfile__Social--Title">Redes sociales</h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className="OngProfile__Social--Networks">
              {props.socialMedia.whatsapp && (
                <a
                  href={`https://api.whatsapp.com/send?phone=${props.socialMedia.whatsapp}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gtm-socialWhatsappClick"
                >
                  <img src="/whatsapp.svg" alt="whatsapp logo" />
                </a>
              )}
              {props.socialMedia.instagram && (
                <a
                  href={props.socialMedia.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gtm-socialInstagramClick"
                >
                  <img src="/insta.svg" alt="instagram logo" />
                </a>
              )}
              {props.socialMedia.facebook && (
                <a
                  href={props.socialMedia.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gtm-socialFacebookClick"
                >
                  <img src="/fb.svg" alt="facebook logo" />
                </a>
              )}
              {props.socialMedia.twitter && (
                <a
                  href={props.socialMedia.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gtm-socialTwitterClick"
                >
                  <img src="/twitter.svg" alt="twitter logo" />
                </a>
              )}
              {props.socialMedia.linkedin && (
                <a
                  href={props.socialMedia.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gtm-socialLinkedInClick"
                >
                  <img src="/linkedIn.svg" alt="linkedin logo" />
                </a>
              )}
            </div>
          </div>
        )}
        {props.location && (
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
                  {props.location.country}, {props.location.city}
                </span>
              </div>
            </div>
          </div>
        )}

        {props.paymentData && (
          <div className={styles.ongProfileFixedHowToDonate}>
            <div>
              <Button
                styleProp={{
                  width: '216px',
                  height: '48px',
                }}
                onClick={handleOpen}
              >
                <span className="gtm-howToDonateClick"> ¿Cómo donar? </span>
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
                    logo={props.logo}
                    name={props.name}
                    paymentData={props.paymentData}
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
