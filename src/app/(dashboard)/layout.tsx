import AppHeader from '@/components/AppHeader'
import AppSideMenu from '@/components/AppSideMenu'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <AppHeader />
      <Layout hasSider>
        <Sider
          theme="light"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            borderRight: '1px solid #f1f1f1',
            height: 'calc(100vh - 64px)',
          }}
        >
          <AppSideMenu />
        </Sider>
        <Layout style={{ marginLeft: '200px' }}>
          <Content style={{ padding: '16px', minHeight: 'calc(100vh - 64px)' }}>
            {' '}
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
