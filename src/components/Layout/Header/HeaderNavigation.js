import React from "react";
import { Button } from "antd";
import { PoweroffOutlined, PlusOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    navigate("/login");
  };

  const handleNewOfferBtn = () => {
    navigate("/offerEdition");
  };

  return (
    <div className="header-navigation">
      <Button onClick={handleNewOfferBtn} icon={<PlusOutlined />}>
        Nowa oferta
      </Button>
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
