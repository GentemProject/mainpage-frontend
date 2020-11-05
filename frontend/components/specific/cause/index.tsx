import LayoutContainer from '@/components/utils/architecture/Layout/container'
import Map from './map'
import Contenido from './contenido'
import DonationData from './donationData'

import styles from './style.module.scss'

function Cause(props) {
  const {
    causeId,
    name,
    description,
    logo,
    objective,
    howusedonation,
    sponsors,
    contact,
    socialMedia,
    paymentData,
    location,
  } = props
  return (
    <div className={styles.ongProfile}>
      <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
        <Map location={location} />
        <LayoutContainer>
          <div className={`${styles.ongProfileContent} ${styles.layout}`}>
            <Contenido
              causeId={causeId}
              name={name}
              description={description}
              logo={logo}
              objective={objective}
              howusedonation={howusedonation}
              sponsors={sponsors}
              contact={contact}
              socialMedia={socialMedia}
              paymentData={paymentData}
              location={location}
            />
            <DonationData name={name} paymentData={paymentData} />
          </div>
        </LayoutContainer>
      </div>
    </div>
  )
}
export default Cause
