import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Space } from "antd";
import { DollarOutlined, EuroOutlined } from "@ant-design/icons";
import HeaderNavigation from "./HeaderNavigation";

import "./Header.module.less";
import "./Header.less";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const logo = (
    <div className={{ display: "flex" }}>
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
        <HeaderNavigation />
      </Space>
    </Header>
  );
};

export default Header;
