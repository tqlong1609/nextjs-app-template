import { Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // <Layout
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '100%',
    //     minHeight: '100vh',
    //     backgroundColor: 'red',
    //   }}
    // >
    //   {children}
    // </Layout>
    <Row
      align="middle"
      justify="center"
      className="bg-white text-center"
      style={{ minHeight: '100vh' }}
    >
      <Content>{children}</Content>
    </Row>
  )
}
