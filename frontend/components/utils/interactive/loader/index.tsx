import style from './style.module.scss'

export function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
