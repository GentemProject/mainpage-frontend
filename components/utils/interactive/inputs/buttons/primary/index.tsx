function Button(props: {
  label: string
  color?: string
  colorFont?: string
  onClick: Function
}): JSX.Element {
  const { label, onClick, color, colorFont } = props
  return (
    <div className="containerButton">
      <button className="button" onClick={()=> onClick()}>
        <span>{label}</span>
      </button>
      <style jsx>
        {`
          .containerButton {
            max-width: 350px;
            width: auto;
            background: ${color};
            display: flex;
            padding: 0 48px;
            align-items: center;
            justify-content: center;
            height: 48px;
            border-radius: 3px;
          }
          .button {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          .button span {
            color: ${colorFont ? colorFont : '#fff'};
            font-weight: bold;
            font-size: 1.2rem;
          }
          .button:active {
            color: red;
          }
        `}
      </style>
    </div>
  )
}
export default Button
