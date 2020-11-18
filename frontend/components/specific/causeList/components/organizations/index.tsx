import { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal'
import ScrollContainer from 'react-indiana-drag-scroll'

// Components & Usables
import ModalContent from '../modal'

// Svg
import Close from '../../../../svg/close'

// Styles
import style from '../../style.module.scss'
import Organization from './Organization'

Modal.setAppElement('#__next')

function ContenidoSider({
  data,
  resetFilters,
  select,
  filters,
  checkbox,
  handleNextPage,
}) {
  const { organizations, pageData } = data
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
        {pageData.totalOrganizations && (
          <h6>
            Mostrando {pageData.totalOrganizations} organizaciones registradas
          </h6>
        )}
        <Modal
          className={style.listModal}
          isOpen={open}
          onRequestClose={handleClose}
        >
          <button className={style.modalClose} onClick={handleClose}>
            <Close />
          </button>
          <ModalContent filters={filters} select={select} checkbox={checkbox} />
        </Modal>
        <ScrollContainer
          vertical={false}
          className={`${style.spanContainer} ${style.optionSelected}`}
        >
          {console.log(filters)}
          {filters.causeId !== '' && (
            <div className={style.filterSpan}>
              <span>{filters.causeId}</span>
            </div>
          )}
          {filters.country !== '' && (
            <div className={style.filterSpan}>
              <span>{filters.country}</span>
            </div>
          )}
          {/*           {filters.products && (
            <div className={style.filterSpan}>
              <span>Entrega de productos</span>
            </div>
          )} */}
          {filters.donationLinks && (
            <div className={style.filterSpan}>
              <span>Pasarela de pagos</span>
            </div>
          )}
          {filters.donationBankAccountName && (
            <div className={style.filterSpan}>
              <span>Transferencia bancaria</span>
            </div>
          )}
        </ScrollContainer>
      </div>
      {organizations.length === 0 ? (
        <>
          <NoOrganization resetFilters={resetFilters} />
        </>
      ) : (
        <>
          <OrganizationsSider
            organizations={organizations}
            hasNext={pageData.hasNextPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </div>
  )
}

function NoOrganization({ resetFilters }) {
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
        <div onClick={resetFilters} className={style.noOrganizationBtn}>
          <span>Mostrar todas las organizaciones</span>
        </div>
      </div>
    </div>
  )
}

function OrganizationsSider({ organizations, hasNext, handleNextPage }) {
  return (
    <>
      <div className={style.organizationGrid}>
        {organizations.map((org) => (
          <>
            <Organization
              // Primary data
              id={org.id}
              key={org.slug}
              slug={org.slug}
              name={org.name}
              logo={org.logoUrl}
              causes={org.causes}
              // Donation data
              link={org.donationLinks}
              bankAccount={org.donationBankAccountName}
            />
          </>
        ))}
      </div>
      {hasNext && (
        <div className={style.seeMoreContainer}>
          <div onClick={handleNextPage} className={style.seeMore}>
            <span className={style.seeMoreText}>Ver más</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ContenidoSider
