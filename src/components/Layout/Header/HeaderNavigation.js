import React from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    return navigate("/login");
  };

  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        <Menu.Item key="offers">
          <NavLink to={"/"}>Wszystkie oferty</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={"/userOffers"}>Moja rekrutacja</NavLink>
        </Menu.Item>
      </Menu>
      <Button
        type="default"
        shape="circle"
        className="avatar-success"
        data-cy="user-settings"
        onClick={handleLogoutBtn}
      >
        <PoweroffOutlined />
      </Button>
    </div>
  );
};

export default HeaderNavigation;
