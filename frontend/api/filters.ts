const BASE_API = 'http://localhost:3030'
//const BASE_API = 'https://www.gentem.org'
interface paramsFilters {
  country: string
  products: boolean
  paymenData: boolean
  transfer: boolean
  community: number
}
export const getDistinct = async () => {
  try {
    const request = await fetch(`${BASE_API}/api/projects/distinct`)
    const response = await request.json()
    const data = response

    return data
  } catch (error) {
    return error
  }
}
export const getAll = async () => {
  try {
    const request = await fetch(`${BASE_API}/api/projects/`)
    const response = await request.json()
    const data = response

    return data
  } catch (error) {
    return error
  }
}
export const getForId = async (id: string) => {
  try {
    const request = await fetch(`${BASE_API}/api/projects/id/${id}`)
    const response = await request.json()
    const data = response
    return data
  } catch (error) {
    return error
  }
}

export const getForFilters = async (params: paramsFilters) => {
  try {
    const request = await fetch(
      `${BASE_API}/api/projects/filters/${params.country}&${params.products}&${params.paymenData}&${params.transfer}&${params.community}`
    )
    const response = await request.json()
    const data = response
    return data
  } catch (error) {
    return error
  }
}
export const getLastest = async (quanty: number) => {
  try {
    const request = await fetch(`${BASE_API}/api/projects/lastest/${quanty}`)
    const response = await request.json()
    const data = response
    return data
  } catch (error) {
    return error
  }
}
