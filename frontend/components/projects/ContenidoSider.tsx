import { Layout, Modal } from 'antd';
import React, { useState } from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
import { ModalContent } from './Contenido';

import TargetBase from '../usables/TargetBase';
import ResultItem from './ResultItem';
import * as styles from '../../styles/onglist.module.scss';

const { Sider } = Layout;

function ContenidoSider(props: any) {
  const [estado, setEstado] = useState({
    visible: false,
  });
  const filter = props.filter;
  const handleModal = () => {
    setEstado({ visible: true });
  };
  const handleClose = () => {
    setEstado({ visible: false });
  };
  const { ONGs } = props;
  console.log(ONGs.data);
  return (
    <Sider className={styles.ongListResult}>
      <div className={styles.ongListResultQuantity}>
        <h6>Mostrando {ONGs.data.length} proyectos</h6>
        <div className={styles.quantityBtn} onClick={handleModal}>
          FILTROS
        </div>
        <Modal maskClosable={true} footer={null} centered={true} onCancel={handleClose} visible={estado.visible}>
          <ModalContent />
        </Modal>
      </div>
      {filter && <TargetBase filter={filter} />}
      {ONGs.data.map((ong: any) => {
        return (
          /*  <Link
            key={ong.slug}
            to={{
              pathname: `/org/${ong.slug}`,
              state: {
                ong: ong,
              },
            }}> */
          <ResultItem name={ong.name} desc={ong.description} location={'Bogotá, Colombia'} />
        );
      })}
    </Sider>
  );
}
export default ContenidoSider;
