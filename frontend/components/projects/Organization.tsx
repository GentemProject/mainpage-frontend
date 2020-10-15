import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'
import style from '../../styles/organizationList/organizationList.module.scss'
import Arrow from '../svg/arrow'

function Organization(props) {
  const { key, products, link, bank, causeId, name, logo, location } = props
  return (
    <div className={style.layout}>
      <div className={style.infoContainer}>
        <div
          className={style.image}
          style={{ backgroundImage: `url(${logo})` }}
        />
        <div className={style.textContainer}>
          <div className={style.name}>
            <span>{name}</span>
          </div>
          <div className={style.location}>
            <span>
              {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>
      <div className={style.causeAndDonations}>
        <div /* className={style.cause} */>
          <div className={style.filterTitle}>
            Causas o comunidades con las que trabajan
          </div>
          {/* <div> */}
          <ScrollContainer vertical={false} className={style.spanContainer}>
            {causeId.map((cause) => (
              <div key={cause} className={style.filterSpan}>
                <span>{cause}</span>
              </div>
            ))}
          </ScrollContainer>
        </div>
        {/* </div> */}
        {(link || bank || products) && (
          <div className={style.donation}>
            <div className={style.filterTitle}>Formas de donar</div>

            <ScrollContainer vertical={false} className={style.spanContainer}>
              {link && (
                <div className={style.filterSpan}>
                  <span>Pasarela de pagos</span>
                </div>
              )}
              {bank && (
                <div className={style.filterSpan}>
                  <span>Transferencia bancaria</span>
                </div>
              )}
              {products && (
                <div className={style.filterSpan}>
                  <span>Entrega de productos</span>
                </div>
              )}
            </ScrollContainer>
          </div>
        )}
      </div>
      <div className={style.link}>
        <Link href="/org/[slug]" as={`/org/${key}`}>
          <a>
            <span>IR AL PERFIL</span> <Arrow />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Organization
