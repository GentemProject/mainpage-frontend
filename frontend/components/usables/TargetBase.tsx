import React from 'react';
import Target from './Target';
import * as style from '../../styles/lib/usables.module.scss';

function TargetBase(props: any) {
  const result = props.array;
  const filter = props.filter;

  if (filter !== 0) {
    return (
      <div className={style.target}>
        <div className={style.targetGrid}>
          {filter.map((title: any) => {
            return <Target key={title} filtro={title} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className={style.target}>
      <div className={style.targetGrid}>
        {result.map((title: any) => {
          return <Target key={title} desc={title} />;
        })}
      </div>
    </div>
  );
}
export default TargetBase;
