import { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import ScrollContainer from 'react-indiana-drag-scroll'

// Components & Usables
import ModalContent from '../modal'
import { useOneCategorie } from '@/hooks/useCategories'

// Svg
import Close from '../../../../svg/close'

// Styles
import style from '../../style.module.scss'
import Organization from './Organization'

Modal.setAppElement('#__next')

function ContenidoSider(props: any) {
  const {
    /*     button,
    proyectos,
    visible,
    quantity, */
    organizations,
    loading,
    /*     changeSelect,
    changeFilters,
    filters, */
    /*     totalOrgFilter, */
  } = props
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={style.ongListResult}>
      <div className={style.ongListResultQuantity}>
        <div className={style.quantityBtn} onClick={handleOpen}>
          FILTROS
        </div>
        {/*         {totalOrgFilter === quantity ? (
          <h6>Mostrando las {quantity} organizaciones registradas </h6>
        ) : (
          <h6>
            Mostrando {totalOrgFilter} de {quantity} organizaciones registradas
          </h6>
        )} */}
        {/*  <Modal
          className={style.listModal}
          isOpen={open}
          onRequestClose={handleClose}
        >
          <button className={style.modalClose} onClick={handleClose}>
            <Close />
          </button>
          <ModalContent
            filters={filters}
            changeSelect={changeSelect}
            changeFilters={changeFilters}
          />
        </Modal> */}
        {/*         <ScrollContainer
          vertical={false}
          className={`${style.spanContainer} ${style.optionSelected}`}
        >
          {filters.causeId !== 0 && (
            <div className={style.filterSpan}>
              <span>{cause}</span>
            </div>
          )}
          {filters.country !== null && (
            <div className={style.filterSpan}>
              <span>{filters.country}</span>
            </div>
          )}
          {filters.products && (
            <div className={style.filterSpan}>
              <span>Entrega de productos</span>
            </div>
          )}
          {filters.donationData && (
            <div className={style.filterSpan}>
              <span>Pasarela de pagos</span>
            </div>
          )}
          {filters.transfer && (
            <div className={style.filterSpan}>
              <span>Transferencia bancaria</span>
            </div>
          )}
        </ScrollContainer> */}
      </div>
      {!loading && <LazyContenidoSider organizations={organizations} />}
      {/*    {proyectLength === 0 ? (
        <> */}
      {/* <NoOrganization changeFilters={changeFilters} /> */}
      {/*       'No org' */}
      {/*  </>
      ) : (
        
      )} */}
    </div>
  )
}

function NoOrganization({ changeFilters }) {
  const resetF = () => {
    changeFilters(false, 'all')
  }
  return (
    <div className={style.noOrganization}>
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
      <div className={style.noOrganizationBtnContainer}>
        <div onClick={resetF} className={style.noOrganizationBtn}>
          <span>Mostrar todas las organizaciones</span>
        </div>
      </div>
    </div>
  )
}

function LazyContenidoSider({ organizations }) {
  return (
    <>
      <div className={style.organizationGrid}>
        {organizations.map((org) => (
          <Organization
            // Primary data
            id={org.id}
            key={org.slug}
            slug={org.slug}
            name={org.name}
            logo={org.logoUrl}
            causes={org.causes}
            // Donation data
            links={org.donationLinks}
            bankAccount={org.donationBankAccountName}
          />
        ))}
      </div>
      {/*  {visible && (
        <div className={style.seeMoreContainer}>
          <div onClick={button} className={style.seeMore}>
            <span className={style.seeMoreText}>Ver más</span>
          </div>
        </div>
      )} */}
    </>
  )
}

export default ContenidoSider
