import LayoutContainer from '@/components/utils/architecture/Layout/container'
import Map from './map'
import Contenido from './contenido'
import DonationData from './donationData'

import styles from './style.module.scss'

function Cause({ data }) {
  const { coordenates, city, country } = data
  console.log(data)
  return (
    <div className={styles.ongProfile}>
      <div className={styles.layoutCenter} style={{ flexWrap: 'wrap' }}>
        <Map location={{ coordenates, city, country }} />
        <LayoutContainer>
          <div className={`${styles.ongProfileContent} ${styles.layout}`}>
            <Contenido
              name={data.name}
              description={data.description}
              logo={data.logoUrl}
              goal={data.goal}
              howItIsUsingDonations={data.howItIsUsingDonations}
              email={data.contactEmail}
              phone={data.contactPhone}
              whatsapp={data.whatsappPhone}
              website={data.contactEmail}
              facebook={data.facebookUrl}
              instagram={data.instagramUrl}
              twitter={data.twitterUrl}
              bankAccount={data.donationBankAccountName}
              donationLinks={data.donationLinks}
              city={city}
              country={country}
              causes={data.causes}
              sponsors={data.sponsors}
              linkedIn={data.linkedInUrl}
            />
            <DonationData
              logo={data.logoUrl}
              name={data.name}
              bankAccount={data.donationBankAccountName}
              donationLinks={data.donationLinks}
              donationProducts={data.donationProducts}
            />
          </div>
        </LayoutContainer>
      </div>
    </div>
  )
}
export default Cause
