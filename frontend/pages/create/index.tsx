import { useState } from 'react'
import Modal from 'react-modal'
import Layout from '../../components/Layout'

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
    <Layout>
      <div style={{ marginTop: '100px' }}>Crear un projecto</div>
      <button onClick={handleOpen}> Modaliño </button>
      <Modal isOpen={open} onRequestClose={handleClose}>
        Crear un projectoCrear un projecto
      </Modal>
    </Layout>
  )
}

export default Create
