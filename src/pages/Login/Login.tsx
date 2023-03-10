import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './Login.css' // import custom styles

export function Login() {
  const handleFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Log in to your account</h1>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={handleFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
