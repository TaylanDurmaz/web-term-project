import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Sider, Layout } from "./Components/Layout";
import ligthTheme from "./Styles/light.json";

import Homepage from "./Pages/Homepage";

const { Content } = Layout;

const App = () => {
  const [theme, setTheme] = useState(ligthTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout style={{ height: "100vh" }}>
        <Sider />
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/home" component={Homepage} />
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
