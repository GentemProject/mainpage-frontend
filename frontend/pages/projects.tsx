import { NextPage } from 'next'
import Head from 'next/head'
import fetch from 'node-fetch'
import { useState, useEffect, useRef } from 'react'
// Components & Usables
import { Contenido, ContenidoSider, Banner } from '../components/projects/'
import Layout from '../components/Layout'
import Loader from '../components/usables/Loader'
import { getForFilters } from '../api/filters'
import { getPagination } from '../api/filters'
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
}
const OngList: NextPage<Props> = ({ projectos }) => {
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
  const [quantityOng, setQuantityOng] = useState(0)
  const mounted = useRef(false)
  useEffect(() => {
    const changeFilters = () => {
      console.log(filters, 'pais selected')
      /*       setPage(0);
            console.log(page); */
      getForFilters(0, filters).then((datos) => {
        if (datos === 'no hay nada') {
          setResultfilters(null)
        } else {
          setResultfilters(datos)
        }
        console.log(datos)
        console.log(datos.data)
        setArrayProjectos([datos.data])
        setMaxPage(datos.totalPages)
        setQuantityOng(datos.data.length)
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
      if (datos === 'no hay nada') {
        setResultfilters(null)
      } else {
        setResultfilters(datos)
      }
      setArrayProjectos([...arrayProjectos, datos.data])
    })
    /*     if (page === maxPage) {
          setVisible(false)
        } */
  }

  useEffect(() => {
    if (page === maxPage) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [page, maxPage])
  /* 
    useEffect(() => {
      if (quantityOng > 15) {
        setVisible(false)
      }
    }, [quantityOng]) */

  useEffect(() => {
    arrayProjectos.map((ong) => {
      setQuantityOng(ong.length + quantityOng)
    })
  }, [arrayProjectos])

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
                />
                <ContenidoSider
                  ONGs={resultfilters ? resultfilters : projectos.data}
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
  const filters = {
    country: null,
    products: true,
    paymenData: true,
    transfer: true,
    community: 0,
  }
  let projectos
  /*   const projectos = await getPagination() */
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
  console.log(projectos)
  return {
    props: {
      projectos,
    },
  }
}
