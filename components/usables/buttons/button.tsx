import * as styleSass from '../../../styles/usable.module.scss'

function Button(props) {
  return (
    <>
      {props.styleProp ? (
        <button
          style={props.styleProp}
          onClick={props.onClick}
          className={styleSass.button}
        >
          {props.children}
        </button>
      ) : (
        <button className={styleSass.button}>{props.children}</button>
      )}
    </>
  )
}
export default Button
