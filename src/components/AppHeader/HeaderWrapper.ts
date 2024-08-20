import { toolbarHeight } from '@/configs/app'
import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  .ant-layout-header {
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0;
    background-color: var(--color-ui-white);
    box-shadow:
      0 2px 2px rgba(0, 0, 0, 0.02),
      0 1px 0 rgba(0, 0, 0, 0.02);
  }

  .trigger {
    transform: rotate(90deg);
  }

  .menu-divider {
    position: relative;
  }

  .menu-divider:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 1px;
    height: 100%;
    content: '';
    background-color: #f9f9f9;
  }

  .header_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    font-family: inherit;
    min-height: ${toolbarHeight}px;
    box-shadow: none;
    border: 0;
    margin-bottom: 1px;

    button {
      border: none;
      box-shadow: none;
      margin-bottom: 0;
      padding: 8px 10px;
      height: 40px;
    }

    .ant-btn .ant-btn-default {
      border-color: none !important;
    }

    .collapse {
      box-shadow: none;
      display: flex;
      align-items: center;
      min-height: ${toolbarHeight}px;
      padding: 8px 24px;
      height: 40px;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .brand {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      white-space: nowrap;
      margin: 0;
      padding: 0 0.5rem;
    }
  }

  .ant-menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: inherit;
    min-height: 56px;
    box-shadow: none;
    border: 0;
    margin-bottom: 1px;
  }

  .ant-menu-horizontal {
    line-height: inherit;
  }

  .ant-menu-item {
    display: flex;
    align-items: center;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    padding: 0 1rem;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    top: 2px;
  }

  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    border-bottom: none !important;
    transition: none !important;
  }

  .nav-link {
    display: initial;
    color: inherit;
  }

  .ant-list-header,
  .ant-list-footer {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
