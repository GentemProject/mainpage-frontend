import Link from 'next/link'
import LayoutContainer from '@/components/utils/architecture/Layout/container'
import NextArrow from '../../../svg/nextArrow'
import style from '../style.module.scss'

function FAQContent() {
  return (
    <div className={style.faq}>
      <div className={style.containerBanner}>
        <div className={style.content}>
          <div className={style.text}>
            <h1 className={style.h1}>Preguntas frecuentes</h1>
          </div>
        </div>
      </div>
        <div className={style.utilContainer}>
          <Collapse id="queesgentem" title="¿Qué es gentem?">
            <p>
              gentem es un directorio abierto de organizaciones sin ánimo de
              lucro que trabajan por mejorar el planeta en el que vivimos. Las
              organizaciones pueden ser buscadas por ubicación, tipo de
              comunidades con las que trabajan, y formas de apoyarlas.
            </p>
            <br />
            <p>
              Nuestro objetivo principal es el de proveer un espacio para que
              cada organización sin ánimo de lucro se de a conocer, sin la
              necesidad de invertir en comunicación y diseño, permitiendo que
              dediquen su atención y recursos en las causas con las que
              trabajan.
            </p>
          </Collapse>
          <Collapse
            id="comofuncionandonaciones"
            title="¿Cómo funcionan las donaciones con gentem?"
          >
            <p>
              <span style={{ fontWeight: 'bold' }}>gentem</span> no se queda con
              ningún tipo de comisión de las donaciones. En realidad, nosotros
              nunca recibimos nada, solo hacemos la conexión. Las donaciones las
              hace directamente quien dona a la organización.
            </p>
          </Collapse>
          <Collapse
            id="comoregistrarorg"
            title="¿Cómo registrar tu organización en gentem?"
          >
            <p>
              Hay dos formas de registrarse en
              <span style={{ fontWeight: 'bold' }}> gentem:</span>
              <ul>
                <li>
                  Directamente en este link:
                  <Link href="/registro.html">
                    <a> gentem.org/registro.html.</a>
                  </Link>
                </li>
                <li>
                  Desde esta web al hacer click en el botón de la parte superior
                  derecha que dice “Regístrate”.
                </li>
              </ul>
            </p>
          </Collapse>
          <Collapse
            id="comocomunicarsegentem"
            title="¿Cómo te puedes comunicar con gentem?"
          >
            <p>
              Para comunicarte con nosotros puedes usar diferentes medios:
              <ul>
                <li>
                  Por email a
                  <a href="mailto:admin@gentem.org"> admin@gentem.org</a>
                </li>
                <li>
                  Por medio de nuestra cuenta de Instagram:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/gentem_org/"
                  >
                    @gentem_org
                  </a>
                </li>
                <li>
                  Por medio de nuestro perfil de Facebook:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/gentemorg"
                  >
                    facebook.com/gentemorg
                  </a>
                </li>
                <li>
                  Por medio de nuestro perfil de LinkedIn:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=" https://www.linkedin.com/company/gentem-org"
                  >
                    linkedin.com/company/gentem-org
                  </a>
                </li>
              </ul>
            </p>
          </Collapse>
          <Collapse id="dondeestagentem" title="¿Dónde está ubicado gentem?">
            <p>
              En nuestro equipo todos estamos en remoto, por lo que no estamos
              en ninguna parte específica. Tenemos gente en:
            </p>
            <p>🇦🇷 Argentina</p>
            <p>🇦🇹 Austria</p>
            <p>🇨🇴 Colombia</p>
            <p>🇪🇨 Ecuador</p>
            <p>🇪🇸 España</p>
          </Collapse>
          <Collapse
            id="quienessongentem"
            title="¿Quienes hacen parte del equipo gentem?"
          >
            <p>
              Nosotros somos todos jóvenes profesionales del mundo digital, y
              nos unimos para intentar hacer una diferencia, y poder aportar con
              nuestro conocimiento. Entre nuestro equipo hay diseñadores,
              programadores, marketeros (si no existe, suena bien 😜),
              copywriters, estrategas, project managers, etc.
            </p>
          </Collapse>
          <Collapse
            id="serpartedegentem"
            title="¿Quieres hacer parte de gentem?"
          >
            <p>
              Si quieres hacer parte de nuestro equipo, envíanos un email o
              escríbenos por nuestras redes sociales. <br /> ¡Siempre hay
              espacio para el que quiera ayudar!
            </p>
          </Collapse>
          <Collapse
            id="comoseverificanorg"
            title="¿Cómo se verifican las organizaciones en gentem?"
          >
            <p>
              En <span style={{ fontWeight: 'bold' }}>gentem</span> intentamos
              agregar organizaciones que demuestran su trabajo en las redes
              sociales. No podemos hacernos responsables de todos los perfiles
              creados, pero nuestro equipo intenta constantemente hacer filtros
              para que no haya perfiles falsos en nuestra plataforma.
            </p>
          </Collapse>
        </div>
    </div>
  )
}

function Collapse({ id, children, title }) {
  return (
    <div className={style.faqCollapse} id={id}>
      <a className={style.faqHref} href={`#${id}`}>
        {title}
        <NextArrow />
      </a>
      <div className={style.collapseContent}>
        <div className={style.collapseInnerContent}>{children}</div>
      </div>
    </div>
  )
}

export default FAQContent
