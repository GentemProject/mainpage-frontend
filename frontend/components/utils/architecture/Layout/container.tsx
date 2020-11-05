import style from './style.module.scss'

function LayoutContainer({ children }) {
  return <div className={style.children}>{children}</div>
}

export default LayoutContainer
