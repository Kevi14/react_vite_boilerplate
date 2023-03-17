import { Modal, Form, Input } from 'antd'
import { useGetEmployee } from '@queries/Employees'

interface EmployeeModalProps {
  selectedEmployeeId: any
  isModalOpen: boolean
  onCancel: () => void
}

const EmployeeModal = ({ selectedEmployeeId, isModalOpen, onCancel }: EmployeeModalProps) => {
  const { isLoading: isLoadingSelectedEmployee, data: selectedEmployee } = useGetEmployee(selectedEmployeeId)

  if (isLoadingSelectedEmployee) {
    return <p>There was an error fetching the selected employee:</p>
  }

  return (
    <Modal title={`Employee ${selectedEmployee?.id}`} open={isModalOpen} onCancel={onCancel}>
      <Form initialValues={selectedEmployee}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EmployeeModal
