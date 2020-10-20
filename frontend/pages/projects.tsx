import { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import NProgress from 'nprogress'

// Components & Usables
import { Contenido, ContenidoSider, Banner } from '../components/projects/'
import Layout from '../components/Layout'
import Loader from '../components/usables/Loader'
import { getForFilters, getAllOrganizations } from '../api/filters'
// Interfaces
import { Organization } from '../interfaces/organization'

interface filters {
  country: string | boolean
  products: boolean
  donationData: boolean
  transfer: boolean
  causeId: number
}
// Styles
import * as styles from '../styles/onglist.module.scss'
import FilterContainer from '../components/projects/filterContainer'

interface Props {
  projectos: Organization
  lengthOng: number
}
const OngList: NextPage<Props> = ({ projectos, lengthOng }) => {
  const quantityOng = lengthOng
  const [resultfilters, setResultfilters] = useState<any>()
  const [filters, setFilters] = useState<filters>({
    country: null,
    products: false,
    donationData: false,
    transfer: false,
    causeId: 0,
  })

  const changeSelect = (motive: string, select: any) => {
    const temp = { ...filters }

    if (motive === 'country') {
      if (select === 'Todos los paises') {
        temp.country = null
      } else {
        temp.country = select
      }
    }
    if (motive === 'causeId') {
      temp.causeId = select
    }
    setFilters(temp)
  }
  const [arrayProjectos, setArrayProjectos] = useState([projectos.data])
  const [maxPage, setMaxPage] = useState(projectos.totalPages)
  const [totalOrg, setTotalOrg] = useState(projectos.totalOrg)
  const [actualPage, setActualPage] = useState(projectos.page)
  const changeFilters = (res: boolean, motive: string) => {
    const temp = { ...filters }
    if (motive === 'all') {
      temp.products = res
      temp.donationData = res
      temp.transfer = res
      temp.causeId = 0
      temp.country = null
    }
    if (motive === 'products') {
      temp.products = res
    }
    if (motive === 'donationData') {
      temp.donationData = res
    }
    if (motive === 'transfer') {
      temp.transfer = res
    }
    setFilters(temp)
  }
  const mounted = useRef(false)
  useEffect(() => {
    const changeFilters = () => {
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
        setActualPage(datos.page)
        setTotalOrg(datos.totalOrg)
      })
    }
    if (mounted.current) {
      changeFilters()
    } else {
      mounted.current = true
    }
  }, [filters])

  const [visible, setVisible] = useState(true)

  const searchMore = async () => {
    await getForFilters(actualPage + 1, filters).then((datos) => {
      NProgress.start()
      if (datos === 'no hay nada') {
        setResultfilters(null)
        NProgress.done()
      } else {
        setResultfilters(datos)
        setActualPage(datos.page)
        NProgress.done()
      }
      setArrayProjectos([...arrayProjectos, datos.data])
    })
  }

  const handlePagination = async () => {
    await searchMore()
  }

  useEffect(() => {
    if (actualPage === maxPage) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [actualPage, maxPage])
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
                <FilterContainer
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
                  totalOrgFilter={totalOrg}
                  quantity={quantityOng}
                  button={handlePagination}
                  visible={visible}
                  setFilters={setFilters}
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
  await getAllOrganizations().then((length) => {
    lengthOng = length
  })
  const filters = {
    country: null,
    products: false,
    donationData: false,
    transfer: false,
    causeId: 0,
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
    revalidate: 20,
  }
}
