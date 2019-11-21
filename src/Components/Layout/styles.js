import styled from "styled-components";
import { Layout } from "antd";

const { Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  background: #f2f2f2;
  heigth: 100vh;
`;

export const StyledContent = styled(Content)`
  padding: ${props => props.theme.spaces.big};
  overflow: auto;
`;

export const StyledSider = styled(Sider)`
  user-select: none;
  border-radius: 0px 10px 10px 0px;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.sider.linear1},
    ${props => props.theme.colors.sider.linear2}
  );
  background-color: ${props => props.theme.colors.sider.background};

  & .ant-layout-sider-children {
    display: flex !important;
    flex-direction: column !important;
  }

  & .ant-menu-root {
    overflow-x: hidden;
    overflow-y: auto;
  }
  & .ant-menu {
    background-color: transparent !important;

    & .ant-menu-item {
      transform: all 1s;
    }
    & .ant-menu-item:hover {
      transform: scale(1.1) !important;
      transition: transform 0.1s;
    }
    & .ant-menu-item {
      transition: transform 0.1s;
    }
    & .ant-menu-item:active,
    & .ant-menu-submenu-title:active {
      background: transparent !important;
    }
  }
  & .ant-menu-submenu {
    border-radius: 0px 10px 50px 0px;

    &.ant-menu-submenu-open {
      background-color: ${props => props.theme.colors.sider.subMenu} !important;
    }
    & .ant-menu-submenu-title {
      transition: transform 0.1s;
    }
    & .ant-menu-submenu-title:hover {
      transform: scale(1.1) !important;
      transition: transform 0.1s;
    }
  }
  & .ant-menu-item-selected {
    background-color: transparent !important;
  }

  z-index: 3;
`;

export const Logo = styled.p`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  padding: ${props => props.theme.spaces.big};

  &:hover {
    transform: scale(1.3);
  }
  transition: all 0.1s;
`;
