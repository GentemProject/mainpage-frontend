import { NextPage } from 'next'
import Head from 'next/head'
import fetch from 'node-fetch'
import { useState, useEffect, useRef } from 'react'
// Components & Usables
import { Contenido, ContenidoSider, Banner } from '../components/projects/'
import Layout from '../components/Layout'
import Loader from '../components/usables/Loader'
import { getForFilters } from '../api/filters'
// Interfaces
import { Organization } from '../interfaces/organization'

interface filters {
  country: string
  products: boolean
  paymenData: boolean
  transfer: boolean
  community: number
}
// Styles
import * as styles from '../styles/onglist.module.scss'

interface Props {
  projects: Organization
}

const OngList: NextPage<Props> = ({ projects }) => {
  const filter = ['Niños y Niñas (7-12)']
  const [resultfilters, setResultfilters] = useState<any>()
  const [filters, setFilters] = useState<filters>({
    country: '',
    products: false,
    paymenData: false,
    transfer: false,
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
      console.log(filters)
      getForFilters(filters).then((data) => {
        if (data === 'no hay nada') {
          setResultfilters(null)
        } else {
          setResultfilters(data)
        }
        console.log(data)
      })
    }
    if (mounted.current) {
      changeFilters()
    } else {
      mounted.current = true
    }
  }, [filters])
  return (
    <>
      <Head>
        <title>gentem | Proyectos</title>
      </Head>
      <Layout>
        {projects.length < 0 && <Loader></Loader>}
        {projects.length > 0 && (
          <div className={styles.ongList}>
            <Banner />
            <div className={styles.layoutCenter}>
              <div className={`${styles.ongListContent} ${styles.layout}`}>
                <Contenido
                  changeFilters={changeFilters}
                  changeSelect={changeSelect}
                />
                <ContenidoSider
                  ONGs={resultfilters ? resultfilters : projects}
                  filter={filter}
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
  const res = await fetch('https://api.gentem.org/api/projects')
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}
