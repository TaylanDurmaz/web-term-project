import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Menu, Icon } from "antd";
import { StyledLayout, StyledSider, StyledContent, Logo } from "./styles";
import { logoutActionCreator } from "../../redux/auth/actions";

export const Layout = StyledLayout;
export const Content = StyledContent;

const { SubMenu } = Menu;

export const Sider = () => {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <StyledSider>
      <div>
        <Logo>BAU</Logo>
        <Menu
          theme="dark"
          selectedKeys={[history.location.pathname]}
          mode="inline"
        >
          <Menu.Item key="/home" onClick={() => history.push("/home")}>
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="/clubs" onClick={() => history.push("/clubs")}>
            <Icon type="team" />
            <span>Student Clubs</span>
          </Menu.Item>

          <Menu.Item key="/events" onClick={() => history.push("/events")}>
            <Icon type="alert" />
            <span>Events</span>
          </Menu.Item>

          <Menu.Item key="/forum" onClick={() => history.push("/forum")}>
            <Icon type="snippets" />
            <span>Forum</span>
          </Menu.Item>
        </Menu>
      </div>

      <div className="account-menu">
        <Menu
          mode="inline"
          theme="dark"
        // onOpenChange={this.onOpenChange}
        >
          <SubMenu
            key="account"
            title={
              <span>
                <Icon type="user" />
                <span>{user.name}</span>
              </span>
            }
          >
            <Menu.Item key="1" onClick={() => dispatch(logoutActionCreator())}>
              <Icon type="poweroff" />
              Logout
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </StyledSider>
  );
};
