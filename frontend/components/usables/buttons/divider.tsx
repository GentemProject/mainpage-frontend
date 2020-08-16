import * as styleSass from '../../../styles/usable.module.scss'

function Divider(props) {
  return (
    <>
      {props.styleProp ? (
        <div
          style={props.styleProp}
          className={`${styleSass.divider} ${styleSass.dividerHorizontal}`}
        >
          {props.children}
        </div>
      ) : (
        <div className={`${styleSass.divider} ${styleSass.dividerHorizontal}`}>
          {props.children}
        </div>
      )}
    </>
  )
}
export default Divider
