import { Divider } from 'antd';
import React from 'react';

function SearchSelect(props: any) {
  return (
    <div className='SearchSelect'>
      <div className='SearchSelect__title'>
        <h4>{props.title}</h4>
      </div>
      <Divider className='Divider' />
      <div className='SearchSelect__info'>
        <p>Selecciona la ciudad en la que quieres que tu donación tenga efecto</p>
      </div>
      <div className='SearchSelect__select'>{props.children}</div>
    </div>
  );
}
export default SearchSelect;
