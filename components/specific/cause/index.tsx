import LayoutContainer from '@/components/utils/architecture/Layout/container'
import Map from './map'
import Contenido from './contenido'
import DonationData from './donationData'

import styles from './style.module.scss'
import { Organization } from 'interfaces/organization'

function Cause(props: { data: Organization }) {
  const { data } = props
  const {
    coordenateX,
    coordenateY,
    city,
    country,
    logoUrl,
    goal,
    causes,
    contactEmail,
    contactPhone,
    whatsappPhone,
    name,
    howItIsUsingDonations,
    description,
    facebookUrl,
    instagramUrl,
    contactWebsite,
    twitterUrl,
    donationBankAccountName,
    donationLinks,
  } = data

  const coordenates = {
    coordenateX,
    coordenateY,
  }
  return (
    <div className={styles.ongProfile}>
      <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
        <Map location={{ coordenates, city, country }} />
        <LayoutContainer>
          <div className={`${styles.ongProfileContent} ${styles.layout}`}>
            <Contenido
              name={name}
              description={description}
              logo={logoUrl}
              goal={goal}
              howItIsUsingDonations={howItIsUsingDonations}
              email={contactEmail}
              phone={contactPhone}
              whatsapp={whatsappPhone}
              website={contactWebsite}
              facebook={facebookUrl}
              instagram={instagramUrl}
              twitter={twitterUrl}
              bankAccount={donationBankAccountName}
              donationLinks={donationLinks}
              /*               donationProducts={donationProducts}
               */ city={city}
              country={country}
              causes={causes}
              /*               sponsors={sponsors}
              linkedIn={linkedInUrl} */
            />
            <DonationData
              logo={logoUrl}
              name={name}
              bankAccount={donationBankAccountName}
              donationLinks={donationLinks}
              /* donationProducts={donationProducts} */
            />
          </div>
        </LayoutContainer>
      </div>
    </div>
  )
}
export default Cause
