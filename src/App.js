import React from "react";
import { Button, Layout, Space } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OffersTable from "./routes/offers/OffersTable";

const App = () => {
  const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<OffersTable />} />
      </Routes>
    </Router>
  );

  const { Menu, Content, Header, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" style={{ color: "whitesmoke" }}>
          {" "}
          WAGE NO AGE
        </div>
        <Space direction="horizontal"></Space>
      </Header>
      <Content>{routes}</Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default App;
