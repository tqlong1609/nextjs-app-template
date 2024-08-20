'use client'

import React from 'react'

import { ConfigProvider } from 'antd'

import getOverridesTokens from './configs'

const withTheme = (node: JSX.Element) => {
  const overridesToken = getOverridesTokens()
  return (
    <>
      <ConfigProvider
        theme={{
          token: overridesToken,
          components: {
            Table: {
              headerBg: 'rgb(249, 249, 249)',
              footerBg: 'rgb(240, 240, 240)',
              headerColor: 'rgba(0, 0, 0, 0.8)',
              algorithm: true,
            },
          },
        }}
      >
        {node}
      </ConfigProvider>
    </>
  )
}

export default withTheme
