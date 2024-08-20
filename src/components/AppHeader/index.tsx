'use client'

import Link from 'next/link'

import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'

import CollapseIcon from '../Icons/collapse'
import Profile from '../Profile'
import { HeaderWrapper } from './HeaderWrapper'

function AppHeader() {
  const items = [
    {
      key: `header_main`,
      label: <Profile />,
      children: [
        {
          key: `key_settings`,
          label: 'Settings',
        },
        {
          key: `key_profile`,
          label: 'Profile',
        },
        {
          type: 'divider',
        },
        {
          key: `key_signout`,
          label: 'Signout',
        },
      ],
    },
  ]

  return (
    <HeaderWrapper>
      <Header>
        <div className="header_wrapper">
          <div className="collapse">
            <CollapseIcon />
          </div>
          <div>
            <Link legacyBehavior href="/">
              <a className="brand">Test</a>
            </Link>
          </div>
        </div>

        <Menu mode="horizontal" items={items} />
      </Header>
    </HeaderWrapper>
  )
}

export default AppHeader
