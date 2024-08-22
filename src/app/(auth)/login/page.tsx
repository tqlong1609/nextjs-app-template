import React from 'react'

import LoginForm from '@/components/LoginForm'
import { Flex } from 'antd'

const LoginPage: React.FC = () => {
  return (
    <Flex flex={'1 1 auto'} justify="center">
      <LoginForm />
    </Flex>
  )
}

export default LoginPage
