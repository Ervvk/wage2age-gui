import React, { useContext } from "react";
import { Button } from "antd";
import { PoweroffOutlined, PlusOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/authContext";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.loggedUser.UserType;
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    authCtx.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        <Menu.Item key="offers">
          <NavLink to={"/offers"} replace={true}>
            {`${userType === "Employer" ? "Twoje" : "Wszystkie"} oferty`}
          </NavLink>
        </Menu.Item>
        {userType === "Candidate" && (
          <Menu.Item>
            <NavLink to={"userOffers"} replace={true}>
              Moja rekrutacja
            </NavLink>
          </Menu.Item>
        )}
        {userType === "Employer" && (
          <Menu.Item>
            <NavLink icon={<PlusOutlined />} to={"offerEdition"} replace={true}>
              + Nowa oferta
            </NavLink>
          </Menu.Item>
        )}
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
