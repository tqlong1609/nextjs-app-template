'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Menu } from 'antd'

export default function AppSideMenu() {
  const pathname = usePathname()
  return (
    <Menu
      mode="inline"
      items={[
        { label: <Link href="/">Dashboard</Link>, key: '/' },
        { label: <Link href="/factories">Factories</Link>, key: '/factories' },
      ]}
      selectedKeys={[pathname]}
    />
  )
}
