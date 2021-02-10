import style from './style.module.scss'

function LayoutContainer(props: any) {
  const { scaped, children } = props
  return (
    <>
      {scaped ? scaped : null}
      <div className={style.children}>{children}</div>
    </>
  )
}

export default LayoutContainer
