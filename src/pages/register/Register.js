import React from "react";
import "antd/dist/antd.css";
import "./Register.less";
import RegisterForm from "./RegisterForm";
import loginLogo from "../../assets/graphics/login_logo.svg";

const Register = () => {
  /*
  <div className="login-form-inputs">
  <Input className="login-form-input"></Input>
  <Input className="login-form-input"></Input>
</div>
*/
  return (
    <div className="register">
      <div className="register-graphic">
        <img src={loginLogo}></img>
        <span>WAGE NO AGE</span>
      </div>
      <div className="register-content">
        <img className="register-logo" alt="WAGE NO AGE" />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
