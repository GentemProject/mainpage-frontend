import { useEffect, useState } from 'react'

// Components & Usables
import TargetBase from '../usables/TargetBase'
import { useOneCategorie } from '../usables/useCategories'

// Styles
import * as style from '../../styles/onglist.module.scss'

function ResultItem(props: any) {
  const communityWorkWith = [props.communityId[0]]
  const communityLength = props.communityId.length
  const [community, setCommunity] = useState([])

  useEffect(() => {
    useOneCategorie({ setCommunity, communityWorkWith })
  }, [])

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
                <TargetBase id={props.id} array={community} filter={0} />
              </div>
              {communityLength > 1 ? (
                <div className={style.targetMore}>+{communityLength - 1}</div>
              ) : (
                false
              )}
            </div>

            <div className={style.detailsFooterLocation}>
              {props.location
                ? `${props.location.city}, ${props.location.country}`
                : ''}
            </div>
          </div>
          <div className={style.additionals}>
            {props.products && (
              <div className={style.optionFilters}>Donar productos</div>
            )}
            {props.link && (
              <div className={style.optionFilters}>Donar Online</div>
            )}
            {props.bank && (
              <div className={style.optionFilters}>Transferencia bancaria</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResultItem
