import React from 'react'
import { useState, useEffect } from 'react'

export const colores = {
  negro: '#313131',
  gris: '#D7D7D7',
  azulOscuro: '#145899',
  celeste: '#237ED5',
}
export const useChange = (bool, reef) => {
  const [stat, setStat] = useState(false)
  useEffect(() => {
    if (bool) {
      setStat(true)
    } else {
      if (reef.current.value !== '') {
        setStat(true)
      } else {
        setStat(false)
      }
    }
  }, [bool])
  return stat
}
