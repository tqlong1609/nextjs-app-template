import styled from '@emotion/styled'

export const ProfileStyle = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    color: var(--color-ui-black);
  }

  .ant-avatar {
    width: 40px;
    height: 40px;
  }

  .user_profile {
    display: flex;
    line-height: normal;
    margin: 0 8px;
    font-weight: 700;

    .user_email {
      color: var(--color-ui-grey-6);
      font-size: var(--font-size-12);
      font-weight: 500;
    }
  }
`
