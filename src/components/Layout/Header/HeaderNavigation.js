import React from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        <Menu.Item>Offers</Menu.Item>
        <Menu.Item>My recruitment</Menu.Item>
      </Menu>
      <Button
        type="default"
        shape="circle"
        className="avatar-success"
        data-cy="user-settings"
      >
        <PoweroffOutlined />
      </Button>
    </div>
  );
};

export default HeaderNavigation;
