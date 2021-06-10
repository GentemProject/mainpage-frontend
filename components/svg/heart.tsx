import React from 'react'

export default function Heart(props: { fill?: string }): JSX.Element {
  const { fill } = props
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ? fill : 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.71003 13.4295L4.63436 14.2961L11.4163 20.6582C11.7073 20.8769 11.8545 20.9951 12 21C12.1455 20.9951 12.2927 20.8769 12.5837 20.6582L19.3656 14.2961L20.29 13.4295C22.57 11.196 22.57 7.5387 20.29 5.30509C18.2205 3.27398 14.874 3.78259 12.6624 5.66955C12.2533 6.01781 12.1095 6.19108 12 6.18947C11.8905 6.19108 11.7467 6.01781 11.3376 5.66955C9.12598 3.78259 5.77953 3.27398 3.71003 5.30509C1.42999 7.5387 1.42999 11.196 3.71003 13.4295V13.4295Z"
      />
    </svg>
  )
}
