import { api } from '@utils'

export const getEmployees = async () => {
  const response = await api.get('/pokemon')
  return response.data
}

export const getEmployeeById = async (id: any) => {
  const response = await api.get(`/pokemon/${id}`)
  console.log("DATA" ,response)
  return response.data
}
