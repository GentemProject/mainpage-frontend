import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'

// Components & Usables
import { ModalContent } from './Contenido'
import ResultItem from './ResultItem'

// Svg
import Close from '../svg/close'

// Styles
import * as styles from '../../styles/onglist.module.scss'
import Organization from './Organization'

Modal.setAppElement('#__next')

function ContenidoSider(props: any) {
  const {
    button,
    proyectos,
    visible,
    quantity,
    changeSelect,
    changeFilters,
    filters,
    totalOrgFilter,
  } = props

  const [open, setOpen] = useState(false)
  const [proyectLength, setProyectLength] = useState()
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    proyectos.map((ong) => {
      setProyectLength(ong.length)
    })
  }, [proyectos])
  return (
    <div className={styles.ongListResult}>
      <div className={styles.ongListResultQuantity}>
        {totalOrgFilter === quantity ? (
          <h6>Mostrando las {quantity} organizaciones registradas </h6>
        ) : (
          <h6>
            Mostrando {totalOrgFilter} de {quantity} organizaciones registradas
          </h6>
        )}
        <div className={styles.quantityBtn} onClick={handleOpen}>
          FILTROS
        </div>
        <Modal
          className={styles.listModal}
          isOpen={open}
          onRequestClose={handleClose}
        >
          <button className={styles.modalClose} onClick={handleClose}>
            <Close />
          </button>
          <ModalContent
            filters={filters}
            changeSelect={changeSelect}
            changeFilters={changeFilters}
          />
        </Modal>
      </div>
      {proyectLength === 0 ? (
        <NoOrganization changeFilters={changeFilters} />
      ) : (
        <LazyContenidoSider
          button={button}
          proyectos={proyectos}
          visible={visible}
        />
      )}
    </div>
  )
}

function NoOrganization({ changeFilters }) {
  const resetF = () => {
    changeFilters(false, 'all')
  }
  return (
    <div className={styles.noOrganization}>
      <div>
        <h3>
          No encontramos ninguna organización con los filtros que escogiste
        </h3>
      </div>
      <div>
        <h5>
          Cambia tus filtros de búsqueda para encontrar una organización a la
          que quieras ayudar
        </h5>
      </div>
      <div className={styles.noOrganizationBtnContainer}>
        <div onClick={resetF} className={styles.noOrganizationBtn}>
          <span>Mostrar todas las organizaciones</span>
        </div>
      </div>
    </div>
  )
}

function LazyContenidoSider({ button, proyectos, visible }) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const onChange = (entries /* observer */) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        /* observer.disconnect() */
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '500px',
    })
    observer.observe(elementRef.current)

    /*   return () => observer.disconnect() */
  })

  return (
    <div className={styles.organizationGrid} ref={elementRef}>
      {show
        ? proyectos.map((page: any) =>
            page.map((ong: any) => {
              return (
                <>
                  {console.log(ong)}
                  <Organization
                    key={ong.slug}
                    products={
                      ong.donationData ? ong.donationData.products : null
                    }
                    link={ong.donationData ? ong.donationData.link : null}
                    bank={
                      ong.donationData ? ong.donationData.bankAccount : null
                    }
                    causeId={ong.primaryData.causeId}
                    id={ong._id}
                    name={ong.primaryData.name}
                    logo={ong.primaryData.logo}
                    location={ong.location}
                  />
                  {/*     <Link key={ong.slug} href="/org/[slug]" as={`/org/${ong.slug}`}>
                  <a>
              
                  <ResultItem
                      products={
                        ong.paymentData ? ong.paymentData.products : null
                      }
                      link={ong.paymentData ? ong.paymentData.link : null}
                      bank={
                        ong.paymentData ? ong.paymentData.bankAccount : null
                      }
                      communityId={ong.primaryData.communityId}
                      id={ong._id}
                      name={ong.primaryData.name}
                      desc={ong.primaryData.description}
                      logo={ong.primaryData.logo}
                      location={ong.location}
                    /> 
                  </a>
                </Link>
              */}
                </>
              )
            })
          )
        : null}
      {visible && (
        <div className={styles.seeMoreContainer}>
          <div onClick={button} className={styles.seeMore}>
            <span className={styles.seeMoreText}>Ver más</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContenidoSider
