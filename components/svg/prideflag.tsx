function PrideFlag(): JSX.Element {
  return (
    <svg
      width="1440"
      height="500"
      viewBox="0 0 1440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1440" height="50" fill="#F5EBEE" />
      <rect y="50" width="1440" height="50" fill="#995545" />
      <rect y="100" width="1440" height="50" fill="#C99169" />
      <rect y="150" width="1440" height="50" fill="#FB3232" />
      <rect y="200" width="1440" height="50" fill="#FFA928" />
      <rect y="250" width="1440" height="50" fill="#F9E84B" />
      <rect y="300" width="1440" height="50" fill="#BBED52" />
      <rect y="350" width="1440" height="50" fill="#60CFFF" />
      <rect y="400" width="1440" height="50" fill="#647CFA" />
      <rect y="450" width="1440" height="50" fill="#47398E" />
      <g filter="url(#filter0_b)">
        <rect width="1440" height="500" fill="url(#paint0_linear)" />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-100"
          y="-100"
          width="1640"
          height="700"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="50" />
          <feComposite
            in2="SorceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="898"
          y1="105.5"
          x2="466.5"
          y2="395.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#979797" stop-opacity="0.27" />
          <stop offset="1" stop-color="#A9A9A9" stop-opacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default PrideFlag
