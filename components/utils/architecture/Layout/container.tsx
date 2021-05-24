import style from './style.module.scss'

function Container(props: { children: JSX.Element }): JSX.Element {
  const {children} = props
  return <div className={style.container}>{children}</div>
}

export default Container
