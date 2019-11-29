import React from "react";
import { useHistory } from "react-router-dom";
import { Menu, Icon } from "antd";
import { StyledLayout, StyledSider, StyledContent, Logo } from "./styles";

export const Layout = StyledLayout;
export const Content = StyledContent;

export const Sider = () => {
  const history = useHistory();

  return (
    <StyledSider>
      <Logo>BAU</Logo>
      <Menu theme="dark" defaultSelectedKeys={["home"]} mode="inline">
        <Menu.Item key="home" onClick={() => history.push("/home")}>
          <Icon type="home" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="clubs" onClick={() => history.push("/clubs")}>
          <Icon type="team" />
          <span>Studen Clubs</span>
        </Menu.Item>

        <Menu.Item key="events" onClick={() => history.push("/events")}>
          <Icon type="alert" />
          <span>Events</span>
        </Menu.Item>

        <Menu.Item key="forum" onClick={() => history.push("/forum")}>
          <Icon type="snippets" />
          <span>Forum</span>
        </Menu.Item>
      </Menu>
    </StyledSider>
  );
};
