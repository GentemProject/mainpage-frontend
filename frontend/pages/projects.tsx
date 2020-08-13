import Layout from '../components/Layout';
import { Layout as AntLayout } from 'antd';
import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Banner from '../components/projects/Banner';
import Contenido from '../components/projects/Contenido';
import ContenidoSider from '../components/projects/ContenidoSider';
import Loader from '../components/usables/Loader';
import * as styles from '../styles/onglist.module.scss';

function OngList(props) {
  const [select, setSelect] = useState(undefined);
  const filter = ['Niños y Niñas (7-12)'];

  function handleChange(value: any) {
    setSelect(value);
    filter.push(value);
  }

  const { projects } = props;
  console.log(projects);

  return (
    <>
      <Layout>
        {!projects.data && <Loader></Loader>}
        {projects.data.length > 0 && (
          <AntLayout className={styles.ongList}>
            <Banner />
            <div className={styles.layoutCenter}>
              <AntLayout className={`${styles.ongListContent} ${styles.layout}`}>
                <Contenido select={handleChange} />
                <ContenidoSider ONGs={projects} filter={filter} select={select} />
              </AntLayout>
            </div>
          </AntLayout>
        )}
      </Layout>
    </>
  );
}

export default OngList;

export const getStaticProps = async () => {
  const res = await fetch('https://api.gentem.org/organizations');
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
};
