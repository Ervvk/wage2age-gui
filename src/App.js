import React from "react";
import { Button, Layout, Space, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  DollarOutlined,
  EuroOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import "./App.less";
import "./App.module.less";

import Offers from "./routes/offers/Offers";
import Offer from "./routes/offerDetails/Offer";
import Login from "./routes/login/Login";

const App = () => {
  const navigate = useNavigate();
  const logged = true;
  const routes = (
    <Routes>
      <Route path="/" element={<Offers />} />
      <Route path="login" element={<Login />} />
      <Route path="offer" element={<Offer />} />
    </Routes>
  );

  const logo = (
    <div className={{ color: "white", display: "flex" }}>
      <DollarOutlined />
      <EuroOutlined />
    </div>
  );
  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

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
        <div className="logo" onClick={handleLogoClick}>
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
