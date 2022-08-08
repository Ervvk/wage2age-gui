import React from "react";
import { Layout } from "antd";
import "./App.less";
import "./App.module.less";

import Header from "./components/Layout/Header/Header";
import Routes from "./pages/routes";
const App = () => {
  const { Content, Footer } = Layout;

  const logged = true;

  return (
    <Layout className="layout">
      <Header></Header>
      <Content>{<Routes />}</Content>
      <Footer></Footer>
    </Layout>
  );
};

export default App;
