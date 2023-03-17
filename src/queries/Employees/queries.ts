import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getEmployeeById, getEmployees } from './calls'

// const queryClient = useQueryClient()

// // Hook for fetching all employees
export const useGetEmployees = () => {
  return useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
  })
}

export const useGetEmployee = (id: any) => {
  return useQuery({
    queryKey: ['employees',id],
    queryFn: () => getEmployeeById(id),
  })
}

// const useGetEmployees = () => {
//   return useQuery('employees', async () => {
//     const { data } = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
//     return data
//   })
// }

// // Hook for fetching a single employee
// const useGetEmployee = (id: any) => {
//   return useQuery(['employee', id], async () => {
//     const { data } = await axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
//     return data
//   })
// }

// // Hook for creating a new employee
// const useCreateEmployee = () => {
//   return useMutation(
//     async employeeData => {
//       const { data } = await axios.post('https://dummy.restapiexample.com/api/v1/create', employeeData)
//       return data
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries('employees')
//       },
//     },
//   )
// }

// // Hook for updating an employee
// const useUpdateEmployee = () => {
//   const queryClient = useQueryClient()

//   return useMutation(
//     async ({ id, newData }) => {
//       const { data } = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${id}`, newData)
//       return data
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries('employees')
//       },
//     },
//   )
// }

// // Hook for deleting an employee
// const useDeleteEmployee = () => {
//   const queryClient = useQueryClient()

//   return useMutation(
//     async id => {
//       const { data } = await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
//       return data
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries('employees')
//       },
//     },
//   )
// }

// export { useCreateEmployee, useDeleteEmployee, useGetEmployee, useGetEmployees, useUpdateEmployee }
