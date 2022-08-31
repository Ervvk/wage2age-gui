import React from "react";
import LoginForm from "./LoginForm";
import loginLogo from "../../assets/graphics/login_logo.svg";
import { Typography } from "antd";
import "./Login.less";

const { Title } = Typography;
const Login = () => {
  return (
    <div className="login">
      <div className="login-graphic">
        <img src={loginLogo}></img>
        <h1>Wage 2 Age</h1>
      </div>
      <div className="login-content">
        <span className="login-title">Zaloguj się</span>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
