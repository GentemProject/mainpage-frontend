const API = process.env.API_BACKEND
interface paramsFilters {
  country: string | boolean
  products: boolean
  donationData: boolean
  transfer: boolean
  causeId: number
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
export const getAllOrganizations = async () => {
  try {
    const request = await fetch(`${API}/api/projects/getall`)
    const response = await request.json()
    const data = response
    const length = data.length

    return length
  } catch (error) {
    return error
  }
}
export const getAllOrganizationsPath = async () => {
  try {
    const request = await fetch(`${API}/api/projects/getall`)
    const response = await request.json()
    const data = response

    return data
  } catch (error) {
    return error
  }
}
export const getForId = async (id: any) => {
  try {
    const request = await fetch(`${API}/api/projects/${id}`)
    const response = await request.json()
    const data = response
    return data[0]
  } catch (error) {
    return error
  }
}

export const getForFilters = async (skip = 0, params: paramsFilters) => {
  const limit = 15
  try {
    const request = await fetch(
      `${API}/api/projects/filters/${params.country}&${params.products}&${params.donationData}&${params.transfer}&${params.causeId}?skip=${skip}&limit=${limit}`
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
