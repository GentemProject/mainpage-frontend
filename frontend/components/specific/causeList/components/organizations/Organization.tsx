import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'
import Arrow from '../../../../svg/arrow'
import style from '../../style.module.scss'

function Organization(props) {
  const {
    slug,
    products,
    link,
    bankAccount,
    causes,
    name,
    logo,
    location,
  } = props
  return (
    <div className={style.layout}>
      <div className={style.infoContainer}>
        {logo ? (
          <div
            className={style.image}
            style={{ backgroundImage: `url(${logo})` }}
          />
        ) : (
          <div
            className={style.image}
            style={{ backgroundImage: `url(/logoDefault.png)` }}
          />
        )}
        <div className={style.textContainer}>
          <div className={style.name}>
            <span>{name}</span>
          </div>
          <div className={style.location}>
            <span>{location && (location.city, location.country)}</span>
          </div>
        </div>
      </div>
      <div className={style.causeAndDonations}>
        <div>
          <div className={style.filterTitle}>
            Causas o comunidades con las que trabajan
          </div>
          <ScrollContainer vertical={false} className={style.spanContainer}>
            {causes.map((cause) => (
              <div key={Math.random()} className={style.filterSpan}>
                <span>{cause.name}</span>
              </div>
            ))}
          </ScrollContainer>
        </div>
        {(link || bankAccount || products) && (
          <div className={style.donation}>
            <div className={style.filterTitle}>Formas de donar</div>

            <ScrollContainer vertical={false} className={style.spanContainer}>
              {link && (
                <div className={style.filterSpan}>
                  <span>Pasarela de pagos</span>
                </div>
              )}
              {bankAccount && (
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
        <Link href="/cause/[slug]" as={`/cause/${slug}`}>
          <a>
            <span>IR AL PERFIL</span> <Arrow />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Organization
