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
        <span>Wage No Age</span>
      </div>
      <div className="register-content">
        <span className="register-title">Zarejestruj się</span>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
