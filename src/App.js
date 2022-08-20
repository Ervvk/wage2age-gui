import React, { useEffect } from "react";
import { Layout } from "antd";
import "./App.less";
import "./App.module.less";

import Header from "./components/Layout/Header/Header";
import Routes from "./pages/routes";

import axios from "axios";

const App = () => {
  const { Content, Footer } = Layout;
  const test = async () => {
    const res = await axios.get(`http://localhost:5000/wage2api/users`);
    console.log(res);
  };

  useEffect(() => {
    test();
  }, []);

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
