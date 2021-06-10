import { useContext, createContext } from 'react'

export const header = {
  classStyle: '',
  userIsLogged: false,
  changeClass: (e: string): void => { e},
}
export const HeaderContext = createContext(header)
export const useHeader = () => useContext(HeaderContext)

export const HeaderProvider = HeaderContext.Provider
export function changeHeaderClass(classStyle: string): {
  classStyle: string
  userIsLogged: boolean

} {
  const aux = { ...header }
  aux.classStyle = classStyle
  console.log(aux)
  return aux
}
