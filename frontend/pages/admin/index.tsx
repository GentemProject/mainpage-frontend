import { useState } from 'react'
import Modal from 'react-modal'

import Close from '../../components/svg/close'

import * as styles from '../../styles/admin/admin.module.scss'

Modal.setAppElement('#__next')
function Create() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className={styles.admin}>
        <div className={styles.title}>
          <h2>Gentem Admin</h2>
        </div>
        <div className={styles.chooseEdit}>
          <div>
            <button onClick={handleOpen} className={styles.btn}>
              Crear Organización
            </button>
            <Modal
              isOpen={open}
              className={styles.createOrgModal}
              onRequestClose={handleClose}
            >
              <button className={styles.modalClose} onClick={handleClose}>
                <Close />
              </button>
              Crear una organización
              <div className={styles.createOrg}>
                <form className={styles.createOrgForm}>
                  <label className={styles.createOrgLabel}>
                    Nombre
                    <input type="text" placeholder="Nombre de ONG" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Logo
                    <input type="text" placeholder="https://urldelaimagen" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Objetivo
                    <input type="text" placeholder="Objetivo" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Descripción
                    <input type="text" placeholder="Descripción" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Imagenes de Sponsors
                    <input type="text" placeholder="Sponsors" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Select Community Id
                    <select>
                      <option value="Seleccione una comunidad">
                        Seleccione una comunidad
                      </option>
                      <option value="1">1</option>
                    </select>
                  </label>
                  <label className={styles.createOrgLabel}>
                    Email
                    <input type="text" placeholder="contacto@org.com" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Telefono
                    <input type="text" placeholder="+54 4444-4444" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Whatsapp
                    <input type="text" placeholder="+54 9 4444-4444" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Instagram
                    <input
                      type="text"
                      placeholder="https://instagram.com/org"
                    />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Facebook
                    <input type="text" placeholder="https://facebook.com/org" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    LinkedIn
                    <input type="text" placeholder="https://linkedin.com/org" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Twitter
                    <input type="text" placeholder="https://twitter.com/org" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Sitio Web
                    <input type="text" placeholder="https://organizacion.org" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Link de Pago
                    <input type="text" placeholder="https://paypal.com/org" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Cuenta Bancaria
                    <input type="text" placeholder="Cuenta Bancaria" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Dirección de entrega de productos
                    <input type="text" placeholder="Calle ..." />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Link de Google Maps
                    <input
                      type="text"
                      placeholder="https://maps.google.com/..."
                    />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Ciudad
                    <input type="text" placeholder="Ciudad" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    País
                    <input type="text" placeholder="País" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Nombre de Admin
                    <input type="text" placeholder="Nombre de Admin" />
                  </label>
                  <label className={styles.createOrgLabel}>
                    Email de Admin
                    <input type="text" placeholder="Email de Admin" />
                  </label>
                </form>
              </div>
            </Modal>
          </div>
          <div className="editOrg">
            <button className={`${styles.btn} ${styles.blue}`}>
              Editar Organización
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create
