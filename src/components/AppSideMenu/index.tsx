import Link from 'next/link'

import { Menu } from 'antd'

export default function AppSideMenu() {
  const menuItems = [
    { label: <Link href="/">Dashboard</Link>, key: 1 },
    { label: <Link href="/factories">Factories</Link>, key: 2 },
  ]
  return <Menu mode="inline" items={menuItems} />
}
