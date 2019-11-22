import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Sider, Layout, Content } from "./Components/Layout";
import ligthTheme from "./Styles/light.json";

import Homepage from "./Pages/Homepage";
import StudentClups from "./Pages/StudentClups";
import Club from "./Pages/Club";

const App = () => {
  const [theme] = useState(ligthTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout style={{ height: "100vh" }}>
        <Sider />
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/clubs" component={StudentClups} />
              <Route exact path="/clubs/detail" component={Club} />
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
