import { Layout, Modal } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ModalContent } from './Contenido'

import TargetBase from '../usables/TargetBase'
import ResultItem from './ResultItem'
import * as styles from '../../styles/onglist.module.scss'

const { Sider } = Layout

function ContenidoSider(props: any) {
  const [estado, setEstado] = useState({
    visible: false,
  })
  const filter = props.filter
  const handleModal = () => {
    setEstado({ visible: true })
  }
  const handleClose = () => {
    setEstado({ visible: false })
  }
  const { ONGs } = props
  return (
    <Sider className={styles.ongListResult}>
      <div className={styles.ongListResultQuantity}>
        <h6>Mostrando {ONGs.data.length} proyectos</h6>
        <div className={styles.quantityBtn} onClick={handleModal}>
          FILTROS
        </div>
        <Modal
          maskClosable={true}
          footer={null}
          centered={true}
          onCancel={handleClose}
          visible={estado.visible}
        >
          <ModalContent />
        </Modal>
      </div>
      {filter && <TargetBase filter={filter} />}
      <LazyContenidoSider ONGs={ONGs} />
    </Sider>
  )
}

function LazyContenidoSider({ ONGs }) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
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
        ? ONGs.data.map((ong: any) => {
            return (
              <Link key={ong.slug} href={`/org/${ong.slug}`}>
                <a>
                  <ResultItem
                    name={ong.name}
                    desc={ong.description}
                    logo={ong.logo}
                    city={ong.city}
                    country={ong.country}
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
