const API = process.env.API_BACKEND
interface paramsFilters {
  country: string | boolean
  products: boolean
  paymenData: boolean
  transfer: boolean
  community: number
}

export const getPagination = async (skip = 0, limit = 15) => {
  try {
    const request = await fetch(
      `${API}/api/projects/pagination?skip=${skip}&limit=${limit}`
    )
    const projectos = await request.json()
    const data = projectos
    return data
  } catch (error) {
    return error
  }
}

export const getDistinct = async () => {
  try {
    const request = await fetch(`${API}/api/projects/distinct`)
    const response = await request.json()
    const data = response

    return data
  } catch (error) {
    return error
  }
}
export const getAll = async () => {
  try {
    const request = await fetch(`${API}/api/projects/`)
    const response = await request.json()
    const data = response
    const length = data.length

    return length
  } catch (error) {
    return error
  }
}
export const getForId = async (id: string) => {
  try {
    const request = await fetch(`${API}/api/projects/id/${id}`)
    const response = await request.json()
    const data = response
    return data
  } catch (error) {
    return error
  }
}

export const getForFilters = async (skip = 0, params: paramsFilters) => {
  const limit = 15
  try {
    const request = await fetch(
      `${API}/api/projects/filters/${params.country}&${params.products}&${params.paymenData}&${params.transfer}&${params.community}?skip=${skip}&limit=${limit}`
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
    const request = await fetch(`${API}/api/projects/lastest/${quanty}`)
    const response = await request.json()
    const data = response
    return data
  } catch (error) {
    return error
  }
}
