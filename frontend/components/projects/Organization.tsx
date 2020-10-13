import style from '../../styles/organizationList/organizationList.module.scss'

const image = 'https://s3.amazonaws.com/gentem.org/ngos/131/logo.jpg'

function Organization() {
  return (
    <div className={style.layout}>
      <div className={style.infoContainer}>
        <div
          className={style.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={style.textContainer}>
          <div className={style.name}>
            <span>Caritas Parroquial Nuestra Señora del Valle</span>
          </div>
          <div className={style.location}>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
      <div className={style.causeAndDonations}>
        <div className={style.cause}>
          <div className={style.filterTitle}>
            Causas o comunidades con las que trabajan
          </div>
          <div className={style.spanContainer}>
            <div className={style.filterSpan}>
              <span>Niños y niñas (7-12)</span>
            </div>
            <div className={style.filterSpan}>
              <span>Cabeza de familia</span>
            </div>
            <div className={style.filterSpan}>
              <span>Niños y niñas (7-12)</span>
            </div>
            <div className={style.filterSpan}>
              <span>Cabeza de familia</span>
            </div>
          </div>
        </div>
        <div className={style.donation}>
          <div className={style.filterTitle}>Formas de donar</div>
          <div className={style.spanContainer}>
            <div className={style.filterSpan}>
              <span>Pasarela de pagos</span>
            </div>
            <div className={style.filterSpan}>
              <span>Transferencia bancaria</span>
            </div>
            <div className={style.filterSpan}>
              <span>Pasarela de pagos</span>
            </div>
            <div className={style.filterSpan}>
              <span>Transferencia bancaria</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.link}>
        <span>IR AL PERFIL &gt;</span>
      </div>
    </div>
  )
}

export default Organization
