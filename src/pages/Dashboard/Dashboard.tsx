import { useState } from 'react'
import { Card, Table, Input } from 'antd'
import { useGetEmployees } from '@queries/Employees'
import EmployeeModal from './Mod'

const { Search } = Input

export const Dashboard = () => {
  const [searchValue, setSearchValue] = useState(0)
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { isLoading: isLoadingEmployees, data: employees } = useGetEmployees()
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ]

  if (isLoadingEmployees) {
    return <p>There was an error fetching employees</p>
  }

  return (
    <>
      <Card title="Employee List">
        <Search
          value={searchValue}
          placeholder="Search by employee ID"
          onSearch={() => {
            setSelectedEmployeeId(searchValue)
            setIsModalOpen(true)
          }}
          onChange={e => {
            setSearchValue(parseInt(e.target.value))
          }}
          enterButton
        />
        <Table columns={columns} dataSource={employees.results} rowKey="name" loading={isLoadingEmployees} />
      </Card>
      {isModalOpen && (
        <EmployeeModal
          selectedEmployeeId={selectedEmployeeId}
          isModalOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
