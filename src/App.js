import React from "react";
import { Button, Layout, Space, Menu } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OffersTable from "./routes/offers/OffersTable";
import {
  DollarOutlined,
  EuroOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./App.less";
import "./App.module.less";

const App = () => {
  const logged = true;
  const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<OffersTable />} />
      </Routes>
    </Router>
  );

  const logo = (
    <div className={{ color: "white", display: "flex" }}>
      <DollarOutlined />
      <EuroOutlined />
    </div>
  );

  const UserMenu = () => {
    return (
      <>
        {logged ? (
          <Button
            type="default"
            shape="circle"
            className="avatar-success"
            data-cy="user-settings"
          >
            <PoweroffOutlined />
          </Button>
        ) : (
          <Button
            type="default"
            shape="circle"
            className="avatar"
            disabled
            data-cy="user-settings"
          >
            <PoweroffOutlined />
          </Button>
        )}
      </>
    );
  };

  const { Content, Header, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <span style={{ display: "inline-block" }}>{logo}</span>
          WAGE NO AGE
        </div>

        <Space direction="horizontal">
          <Menu mode="horizontal">
            <Menu.Item>Offers</Menu.Item>
            <Menu.Item>My recruitment</Menu.Item>
          </Menu>
          <UserMenu />
        </Space>
      </Header>
      <Content>{routes}</Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default App;
