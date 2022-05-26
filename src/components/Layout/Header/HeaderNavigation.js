import React from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const HeaderNavigation = () => {
  return (
    <>
      (
      <Button
        type="default"
        shape="circle"
        className="avatar-success"
        data-cy="user-settings"
      >
        <PoweroffOutlined />
      </Button>
      )
    </>
  );
};

export default HeaderNavigation;
