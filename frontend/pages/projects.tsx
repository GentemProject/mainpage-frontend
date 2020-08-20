import { NextPage } from 'next'
import Head from 'next/head'
import fetch from 'node-fetch'

// Components & Usables
import { Contenido, ContenidoSider, Banner } from '../components/projects/'
import Layout from '../components/Layout'
import Loader from '../components/usables/Loader'

// Interfaces
import { Organization } from '../interfaces/organization'

// Styles
import * as styles from '../styles/onglist.module.scss'

interface Props {
  projects: Organization
}

const OngList: NextPage<Props> = ({ projects }) => {
  const filter = ['Niños y Niñas (7-12)']
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
                <Contenido />
                <ContenidoSider ONGs={projects} filter={filter} />
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
