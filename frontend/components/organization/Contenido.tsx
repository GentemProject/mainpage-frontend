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
import cat from '../../api/categories.json'

// Styles
import * as styles from '../../styles/organization.module.scss'

Modal.setAppElement('#__next')
function Contenido(props: any) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [communityArray, setCommunityArray] = useState<any>([])

  const communityWorkWith = props.communityworkwith
  const catdata = cat.data
  useEffect(() => {
    catdata.map((target: any) => {
      return communityWorkWith.map((community: any) => {
        return target.cat_id.some((iqual: number) => iqual === community)
          ? setCommunityArray((communityArray: []) => [
              ...communityArray,
              target.cat_name,
            ])
          : false
      })
    })
  }, [catdata, communityWorkWith])
  const filter = 0

  return (
    <div className={styles.ongProfileHero}>
      <div className="OngProfile__Hero--User">
        <div className={styles.ongProfileUserImgBreadcrumb}>
          <div className={styles.ongProfileUserImg}>
            {props.logo ? (
              <img src={props.logo} alt="User 1" />
            ) : (
              <img src="/logoDefault.png" alt="" />
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
          <TargetBase array={communityArray} filter={filter} />

          <h3 className={styles.ongProfileInfoDescription}>
            {props.description}
          </h3>
        </div>
        <div className={styles.ongProfileUserHowUseDonation}>
          <h3 className={styles.ongProfileHowUseDonationTitle}>
            ¿Cómo usamos las donaciones que recibimos?
          </h3>
          <p className={styles.ongProfileHowUseDonationDescription}>
            {props.howusedonation}
          </p>
        </div>
        {props.sponsors && (
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
        )}

        {(props.website || props.email || props.phone) && (
          <div className={styles.ongProfileHowToDonateContact}>
            <h4 className={styles.ongProfileContactTitle}> Contacto </h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className={styles.ongProfileContactInfo}>
              {props.website && (
                <div className="OngProfile__Info-Web">
                  <strong>Website</strong> <br />
                  <span>
                    <a
                      href={props.website}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {props.website}
                    </a>
                  </span>
                </div>
              )}
              {props.email && (
                <div className="OngProfile__Info-Email">
                  <strong>Email</strong> <br />
                  <span>
                    <a href={`mailto://${props.email}`}>{props.email}</a>
                  </span>
                </div>
              )}
              {props.phone && (
                <div className={styles.ongProfileInfoTel}>
                  <strong>Teléfono</strong> <br />
                  <span>{props.phone}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {(props.facebook || props.instagram || props.whatsapp) && (
          <div className={styles.ongProfileSocial}>
            <h4 className="OngProfile__Social--Title">Redes sociales</h4>
            <Divider
              styleProp={{
                margin: '12px 0',
              }}
            />
            <div className="OngProfile__Social--Networks">
              {props.whatsapp && (
                <a
                  href={`https://api.whatsapp.com/send?phone=${props.whatsapp}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/whatsapp.svg" alt="whatsapp logo" />
                </a>
              )}
              {props.instagram && (
                <a
                  href={props.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/insta.svg" alt="instagram logo" />
                </a>
              )}
              {props.facebook && (
                <a
                  href={props.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/fb.svg" alt="facebook logo" />
                </a>
              )}
            </div>
          </div>
        )}
        {(props.country || props.city) && (
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
                  {props.country}, {props.city}
                </span>
              </div>
            </div>
          </div>
        )}

        {(props.instructionstodeliverproducts ||
          props.paymentslink ||
          props.accounts) && (
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
                    logo={props.logo}
                    paymentslink={props.paymentslink}
                    name={props.name}
                    instructionstodeliverproducts={
                      props.instructionstodeliverproducts
                    }
                    accounts={props.accounts}
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
