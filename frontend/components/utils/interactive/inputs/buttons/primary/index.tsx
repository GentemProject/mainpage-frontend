function Button(props: string) {
  const { desc, width, color, colorFont } = props
  return (
    <div className="containerButton">
      <button className="button">
        <span>{desc}</span>
      </button>
      <style jsx>
        {`
          .containerButton {
            max-width: 350px;
            width: ${width};
            background: ${color};
            display: flex;
            align-items: center;
            justify-content: center;
            height: 48px;
            border-radius: 5px;
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
