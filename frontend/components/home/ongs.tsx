import React, { /* useEffect */ useState, Fragment } from 'react'
import * as styles from '../../styles/home/home.module.scss'
//import { getOrganizations } from '../../api/organizations';

/* const logoDefault = '/logoDefault.png' */
function Ongs() {
  const [isLoading /* setIsloading */] = useState<boolean>(true)
  const [logo /* setLogo */] = useState<Array<string>>([])
  const [name /* setName */] = useState<Array<string>>([])
  /*useEffect(() => {
    getOrganizations().then(data => {
      let max: Array<string> = [];
      let nam: Array<string> = [];
      let objson: any = data;
      let obj: any;
      console.log(data)
      for (let i = 0; i < 8; i++) {
        let anterior: any = new Date(data[1].createdAt);

        for (let i in objson) {
          let actual: any = new Date(objson[i].createdAt);
          if (actual > anterior) {
            anterior = actual;
            obj = i;
          }
        }

      if(objson[obj].logo){
        if (objson[obj].logo === undefined) {
          max.push(logoDefault);
        } else {
          max.push(objson[obj].logo);
        }
      }
        nam.push(objson[obj].name);

        delete objson[obj];
        obj = 0;
      }
      setName(nam);
      setLogo(max);
      setIsloading(false);
    }).then(error => {
      console.log("no anduvo", error);
      setIsloading(true);
    })
  }, []);*/
  return (
    <div>
      {' '}
      <div className={styles.containerOngs}>
        <div className={styles.texto}>
          <h2>Últimos proyectos en unirse</h2>
        </div>
        <div className={styles.desc}>
          <p>
            Estos son los proyectos que recientemente se han unido a{' '}
            <strong>gentem</strong>. ¿Qué estás esperando para apoyarlos?
          </p>
        </div>

        <div className={styles.containerFichas}>
          <div className={styles.content}>
            {!isLoading ? (
              <Fragment>
                <div className={styles.i4}>
                  <div className={styles.colm4}>
                    <Ficha i={logo[0]} alt={name[0]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[1]} alt={name[1]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[2]} alt={name[2]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[3]} alt={name[3]} />
                  </div>
                </div>

                <div className={styles.i4}>
                  <div className={styles.colm4}>
                    <Ficha i={logo[4]} alt={name[4]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[5]} alt={name[5]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[6]} alt={name[6]} />
                  </div>
                  <div className={styles.colm4}>
                    <Ficha i={logo[7]} alt={name[7]} />
                  </div>
                </div>
              </Fragment>
            ) : (
              'cargando'
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
function Ficha(props: any) {
  return (
    <div className={styles.ficha}>
      <div className={styles.img}>
        <img src={props.i} alt={props.alt} />
      </div>
    </div>
  )
}
export default Ongs
