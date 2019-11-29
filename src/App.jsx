import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Sider, Layout, Content } from "./Components/Layout";
import ligthTheme from "./Styles/light.json";

import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import StudentClubs from "./Pages/StudentClubs";
import ClubDetail from "./Pages/ClubDetail";
import Forum from "./Pages/Forum";
import TopicDetail from "./Pages/TopicDetail";

const App = () => {
  const [theme] = useState(ligthTheme);
  const loggedIn = useSelector(state => state.auth.loggedIn);

  return (
    <ThemeProvider theme={theme}>
      {loggedIn ? (
        <Layout style={{ height: "100vh" }}>
          <Sider />
          <Layout>
            <Content>
              <Switch>
                <Route exact path="/home" component={Homepage} />
                <Route exact path="/clubs" component={StudentClubs} />
                <Route exact path="/clubs/detail" component={ClubDetail} />
                <Route exact path="/forum/topic" component={TopicDetail} />
                <Route exact path="/forum" component={Forum} />
                <Redirect to="/home" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      )}
    </ThemeProvider>
  );
};

export default App;
