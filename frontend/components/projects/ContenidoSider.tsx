import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'

// Components & Usables
import { ModalContent } from './Contenido'
import TargetBase from '../usables/TargetBase'
import ResultItem from './ResultItem'

// Svg
import Close from '../svg/close'

// Styles
import * as styles from '../../styles/onglist.module.scss'

Modal.setAppElement('#__next')

function ContenidoSider(props: any) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { ONGs } = props

  return (
    <div className={styles.ongListResult}>
      <div className={styles.ongListResultQuantity}>
        <h6>Mostrando {ONGs.length} proyectos</h6>
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
          <ModalContent />
        </Modal>
      </div>
      <LazyContenidoSider ONGs={ONGs} />
    </div>
  )
}

function LazyContenidoSider({ ONGs }) {
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
    <div ref={elementRef}>
      {show
        ? ONGs.map((ong: any) => {
            return (
              <Link key={ong.slug} href="/org/[slug]" as={`/org/${ong.slug}`}>
                <a>
                  <ResultItem
                    communityId={ong.primaryData.communityId}
                    id={ong._id}
                    name={ong.primaryData.name}
                    desc={ong.primaryData.description}
                    logo={ong.primaryData.logo}
                    location={ong.location}
                  />
                </a>
              </Link>
            )
          })
        : null}
    </div>
  )
}

export default ContenidoSider
