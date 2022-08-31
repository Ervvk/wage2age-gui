import React from "react";
import "antd/dist/antd.css";
import RegisterForm from "./RegisterForm";

import loginLogo from "../../assets/graphics/login_logo.svg";
import "./Register.less";

const Register = () => {
  return (
    <div className="register">
      <div className="register-graphic">
        <img src={loginLogo}></img>
        <h1>Wage 2 Age</h1>
      </div>
      <div className="register-content">
        <span className="register-title">Zarejestruj się</span>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
