import React from "react";
import "antd/dist/antd.css";
import "./Login.less";
import LoginForm from "./LoginForm";
import loginLogo from "../../assets/graphics/login_logo.svg";
const Login = () => {
  /*

  <div className="login-form-inputs">
  <Input className="login-form-input"></Input>
  <Input className="login-form-input"></Input>
</div>
*/

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
