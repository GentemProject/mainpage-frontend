import React from 'react'
import styles from './styles.module.scss'

interface Props {
  title: string
  description: string
  image: string
}

export function Hero({ title, description, image }: Props) {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero_image}>
        <img src={image} />
      </div>
      <div className={styles.Hero_content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
