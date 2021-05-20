import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}
export function Container({ children }: Props) {
  return <div className={styles.Container}>{children}</div>
}
