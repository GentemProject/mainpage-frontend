import { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import NProgress from 'nprogress'

// Components & Usables
import { Contenido, ContenidoSider, Banner } from '../components/projects/'
import Layout from '../components/Layout'
import Loader from '../components/usables/Loader'
import { getForFilters, getAll } from '../api/filters'
// Interfaces
import { Organization } from '../interfaces/organization'

interface filters {
  country: string | boolean
  products: boolean
  paymenData: boolean
  transfer: boolean
  community: number
}
// Styles
import * as styles from '../styles/onglist.module.scss'

interface Props {
  projectos: Organization
  lengthOng: number
}
const OngList: NextPage<Props> = ({ projectos, lengthOng }) => {
  const quantityOng = lengthOng
  const [resultfilters, setResultfilters] = useState<any>()
  const [filters, setFilters] = useState<filters>({
    country: null,
    products: true,
    paymenData: true,
    transfer: true,
    community: 0,
  })

  const changeSelect = (motive: string, select: any) => {
    const temp = { ...filters }
    if (motive === 'country') {
      temp.country = select
    }
    if (motive === 'community') {
      temp.community = select
    }
    setFilters(temp)
  }

  const [arrayProjectos, setArrayProjectos] = useState([projectos.data])
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const changeFilters = (res: boolean, motive: string) => {
    const temp = { ...filters }
    if (motive === 'products') {
      temp.products = res
    }
    if (motive === 'paymenData') {
      temp.paymenData = res
    }
    if (motive === 'transfer') {
      temp.transfer = res
    }
    setFilters(temp)
  }
  const mounted = useRef(false)
  useEffect(() => {
    const changeFilters = () => {
      /*       setPage(0); */
      getForFilters(0, filters).then((datos) => {
        NProgress.start()
        if (datos === 'no hay nada') {
          setResultfilters(null)
          NProgress.done()
        } else {
          setResultfilters(datos)
          NProgress.done()
        }
        setArrayProjectos([datos.data])
        setMaxPage(datos.totalPages)
      })
    }
    if (mounted.current) {
      changeFilters()
    } else {
      mounted.current = true
    }
  }, [filters])

  const [visible, setVisible] = useState(true)

  const handlePagination = async () => {
    setPage(page + 1)
    getForFilters(page, filters).then((datos) => {
      NProgress.start()
      if (datos === 'no hay nada') {
        setResultfilters(null)
        NProgress.done()
      } else {
        setResultfilters(datos)
        NProgress.done()
      }
      setArrayProjectos([...arrayProjectos, datos.data])
    })
  }

  useEffect(() => {
    if (page === maxPage) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [page, maxPage])
  return (
    <>
      <Head>
        <title>gentem | Proyectos</title>
      </Head>
      <Layout>
        {projectos.data.length < 0 && <Loader></Loader>}
        {projectos.data.length > 0 && (
          <div className={styles.ongList}>
            <Banner />
            <div className={styles.layoutCenter}>
              <div className={`${styles.ongListContent} ${styles.layout}`}>
                <Contenido
                  changeFilters={changeFilters}
                  changeSelect={changeSelect}
                  filters={filters}
                />
                <ContenidoSider
                  ONGs={resultfilters ? resultfilters : projectos.data}
                  changeSelect={changeSelect}
                  changeFilters={changeFilters}
                  filters={filters}
                  proyectos={arrayProjectos}
                  quantity={quantityOng}
                  button={handlePagination}
                  visible={visible}
                />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default OngList

export const getStaticProps = async () => {
  let lengthOng
  await getAll().then((length) => {
    lengthOng = length
  })
  const filters = {
    country: null,
    products: true,
    paymenData: true,
    transfer: true,
    community: 0,
  }
  let projectos
  const page = 0
  await getForFilters(page, filters).then((datos) => {
    if (datos === 'no hay nada') {
      projectos = null
      return projectos
    } else {
      projectos = datos
      return projectos
    }
  })
  return {
    props: {
      projectos,
      lengthOng,
    },
  }
}
