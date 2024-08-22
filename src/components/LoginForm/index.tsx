'use client'

import { useFormState } from 'react-dom'

import Link from 'next/link'

import { login } from '@/lib/actions/login.action'
import { Button, Flex, Form, Input, Typography } from 'antd'

const LoginForm = () => {
  const [state, formAction] = useFormState(login, {
    message: '',
  })

  // return (
  //   <form action={formAction}>
  //     <input type="text" placeholder="username" name="username" required />
  //     <input type="password" placeholder="password" name="password" required />
  //     <button>Login</button>
  //     {state?.error}
  //   </form>
  // )

  return (
    <Flex vertical justify="center" style={{ width: '20vw' }}>
      <Typography.Title level={1} style={{ textAlign: 'center', fontSize: '48px' }}>
        需給表管理
      </Typography.Title>
      <Typography.Title
        level={3}
        style={{ textAlign: 'center', fontWeight: 700, fontSize: '24px' }}
      >
        ログイン
      </Typography.Title>

      <Form>
        <Typography.Text style={{ textAlign: 'left' }}>Username</Typography.Text>
        <Form.Item name="username">
          <Input />
        </Form.Item>
        <Typography.Text style={{ textAlign: 'left' }}>Password</Typography.Text>
        <Form.Item name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              background: 'linear-gradient(80.83deg, #2153D4 -0.64%, #2E6CF7 49.15%, #6EAFF7 100%)',
              color: 'white',
              boxShadow: '0px 2px 4px 0px #66666629',
              height: '40px',
              padding: '8px 16px',
              gap: '4px',
              borderRadius: '8px',
            }}
          >
            ログイン
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  )
}

export default LoginForm
