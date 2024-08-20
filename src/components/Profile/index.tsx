import { DownOutlined } from '@ant-design/icons'
import { Avatar, Flex } from 'antd'

import { ProfileStyle } from './ProfileStyle'

export default function Profile() {
  return (
    <ProfileStyle>
      <div className="wrapper">
        <Avatar src={'/assets/avatar_user_01.svg'} />
        <Flex vertical className="user_profile">
          <div className="user_name">Long</div>
          <div className="user_email">Long@gmail.com</div>
        </Flex>
        <DownOutlined />
      </div>
    </ProfileStyle>
  )
}
