import Layout from '../components/Layout'
import { Layout as AntLayout } from 'antd'
import React, { useState } from 'react'
import fetch from 'node-fetch'
import { Organization } from '../interfaces/organization'
import Banner from '../components/projects/Banner'
import Contenido from '../components/projects/Contenido'
import ContenidoSider from '../components/projects/ContenidoSider'
import Loader from '../components/usables/Loader'
import Head from 'next/head'
import * as styles from '../styles/onglist.module.scss'
import { NextPage } from 'next'

interface Props {
  projects: Organization
}

const OngList: NextPage<Props> = ({ projects }) => {
  const [select, setSelect] = useState(undefined)
  const filter = ['Niños y Niñas (7-12)']

  function handleChange(value: any) {
    setSelect(value)
    filter.push(value)
  }

  return (
    <>
      <Head>
        <title>gentem | Proyectos</title>
      </Head>
      <Layout>
        {projects.data.length < 0 && <Loader></Loader>}
        {projects.data.length > 0 && (
          <AntLayout className={styles.ongList}>
            <Banner />
            <div className={styles.layoutCenter}>
              <AntLayout
                className={`${styles.ongListContent} ${styles.layout}`}
              >
                <Contenido select={handleChange} />
                <ContenidoSider
                  ONGs={projects}
                  filter={filter}
                  select={select}
                />
              </AntLayout>
            </div>
          </AntLayout>
        )}
      </Layout>
    </>
  )
}

export default OngList

export const getStaticProps = async () => {
  const res = await fetch('https://api.gentem.org/organizations')
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}
