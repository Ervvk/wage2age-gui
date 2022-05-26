import React from "react";
import { Layout, Space, Menu } from "antd";
import { DollarOutlined, EuroOutlined } from "@ant-design/icons";
import HeaderNavigation from "./HeaderNavigation";
import "./Header.module.less";
import "./Header.less";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const logo = (
    <div className={{ color: "white", display: "flex" }}>
      <DollarOutlined />
      <EuroOutlined />
    </div>
  );

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
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
        <HeaderNavigation />
      </Space>
    </Header>
  );
};

export default Header;
