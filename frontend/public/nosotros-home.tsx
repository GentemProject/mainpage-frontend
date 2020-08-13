import React from 'react';
import iSearch from '../../assets/img/search.svg';
import iHelp from '../../assets/img/help.svg';
import iSelect from '../../assets/img/select.svg';

function Noshome() {
  return (
    <div className='container-about'>
      <div className='texto'>
        <h2>Como funciona gentem</h2>
      </div>
      <div className='content'>
        <div className='colm-3'>
          <div className='about'>
            <div className='container-img'>
              <div className='img'>
                <img src={iSearch} alt='' />
              </div>
            </div>
            <div className='tit'>
              <span>Busca entre las fundaciones</span>
            </div>
            <div className='desc'>
              <p>Elige la ubicación y la comunidad que quieres impactar con el tipo de donación que quieras brindar</p>
            </div>
          </div>
        </div>

        <div className='colm-3'>
          <div className='about'>
            <div className='container-img'>
              <div className='img'>
                <img src={iSelect} alt='' />
              </div>
            </div>
            <div className='tit'>
              <span>Selecciona la que más te guste</span>
            </div>
            <div className='desc'>
              <p>
                De acuerdo al filtro que hayas realizado, selecciona entre el perfil de cada una de las fundaciones que
                te presentamos
              </p>
            </div>
          </div>
        </div>
        <div className='colm-3'>
          <div className='about'>
            <div className='container-img'>
              <div className='img'>
                <img src={iHelp} alt='' />
              </div>
            </div>
            <div className='tit'>
              <span>Ayuda como puedas</span>
            </div>
            <div className='desc'>
              <p>
                Cuando elijas la fundación que quieres impactar, realiza tu donación mediante los diferentes métodos
                presentados
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='btn-fl'>
        <button className='btn-colab' style={{ background: '#237ed5' }}>
          <span>Ayudar ahora</span>
        </button>
      </div>
    </div>
  );
}
export default Noshome;
