import style from '../../styles/organizationList/organizationList.module.scss'

function Organization() {
  return (
    <div className={style.layout}>
      <div className={style.infoContainer}>
        <div className={style.image}>
          <img
            src="https://s3.amazonaws.com/gentem.org/ngos/131/logo.jpg"
            alt=""
          />
        </div>
        <div className={style.textContainer}>
          <div className={style.name}>
            <span>Caritas Parroquial Nuestra Señora del Valle</span>
          </div>
          <div className={style.location}>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>
      <div className={style.cause}>
        <div className={style.filterTitle}>
          Causas o comunidades con las que trabajan
        </div>
        <div>
          <span>Niños y niñas (7-12)</span>
        </div>
      </div>
      <div className={style.donation}>
        <div className={style.filterTitle}>Formas de donar</div>
        <div>
          <span>Pasarela de pagos</span>
        </div>
      </div>
      <div className={style.link}>
        <span>IR AL PERFIL &gt;</span>
      </div>
    </div>
  )
}

export default Organization
