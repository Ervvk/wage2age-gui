import React from "react";
import LoginForm from "./LoginForm";
import loginLogo from "../../assets/graphics/login_logo.svg";

import "./Login.less";

const Login = () => {
  return (
    <div className="login">
      <div className="login-graphic">
        <img src={loginLogo}></img>
        <span>WAGE NO AGE</span>
      </div>
      <div className="login-content">
        <img className="login-logo" alt="WAGE NO AGE" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
