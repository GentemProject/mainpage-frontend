import React from 'react'
import TargetBase from '../usables/TargetBase'
import * as style from '../../styles/onglist.module.scss'

function ResultItem(props: any) {
  const array = ['Adolescentes']
  return (
    <div className="OngList__Result--itemContainer">
      <div className={style.resultItem}>
        {props.logo ? (
          <>
            <div
              className={style.resultItemImg}
              style={{
                backgroundImage: `url(${props.logo})`,
              }}
            />
          </>
        ) : (
          <div
            className={style.resultItemImg}
            style={{
              backgroundImage: 'url(/logoDefault.png)',
            }}
          />
        )}
        <div className={style.resultItemDetails}>
          <div className={style.itemDetailsTitle}>
            <div className="title-child">
              <h4>{props.name}</h4>
            </div>
          </div>
          <div className={style.itemDetailsDesc}>
            <h6>{props.desc}</h6>
          </div>
          <div className={style.itemDetailsFooter}>
            <div className={style.detailsFooterTarget}>
              <div className={style.footerTargetPrincipal}>
                <TargetBase array={array} filter={0} />
              </div>
              {/*  <div className='footer__target--more'> +1</div> */}
            </div>
            <div className={style.detailsFooterLocation}>
              {props.location
                ? `${props.location.city}, ${props.location.country}`
                : 'Sin nombrar'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResultItem
