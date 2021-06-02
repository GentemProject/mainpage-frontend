function Shape(props: { className: string }): JSX.Element {
  const { className } = props
  return (
    <svg
      width="682"
      height="526"
      viewBox="0 0 682 526"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M526.552 406.068C375.724 550.122 241.457 518.532 193.176 484.731C174.65 473.577 127.946 438.594 89.3431 387.891C41.089 324.511 -89.3274 25.8171 152.759 10.5708C394.845 -4.6756 571.326 81.4489 627.774 115.432C684.222 149.416 715.086 226.002 526.552 406.068Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.801025"
          y="0.779419"
          width="680.203"
          height="524.54"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default Shape
