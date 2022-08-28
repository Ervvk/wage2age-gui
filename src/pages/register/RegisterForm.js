import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Select, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";
import { http } from "../../helpers/utils/http";
import RegisterFormCandidate from "./forms/RegisterFormCandidate";
import { RegisterFormEmployer } from "./forms/RegisterFormEmployer";
import "./Register.less";

const { Option } = Select;

const RegisterForm = () => {
  const [userType, setUserType] = useState("candidate");

  const onUserTypeChange = (value) => {
    setUserType(value);
  };

  const onFinish = async (values) => {
    const response = await http({
      method: "POST",
      url: `/users`,
      headers: {
        accept: "*/*",
      },

      data: { ...values, UserType: userType },
    });

    if (response.status === 200) {
      message.success("Rejestracja kompletna, teraz możesz się zalogować");
    } else {
      message.error("Nie udało się utworzyć konta. Podaj inny login/hasło");
    }
  };

  const formItemsEmployer = <RegisterFormEmployer />;
  const formItemsCandidate = <RegisterFormCandidate />;

  return (
    <Form name="normal_register" className="register-form" onFinish={onFinish}>
      <Form.Item name={"UserType"}>
        <Select
          onChange={onUserTypeChange}
          className="register-form-input"
          defaultValue="candidate"
          rules={[
            {
              required: true,
              message: "Wybierz typ usera",
            },
          ]}
        >
          <Option value="employer" key={"employer"}>
            Pracodawca
          </Option>
          <Option value="candidate" key={"candidate"}>
            Kandydat
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="Login"
        rules={[
          {
            required: true,
            message: "Podaj login",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Login"
          className="register-form-input"
        />
      </Form.Item>
      <Form.Item
        name="Password"
        rules={[
          {
            required: true,
            message: "Podaj swoje hasło!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          className="register-form-input"
          type="password"
          placeholder="Hasło"
        />
      </Form.Item>
      <Form.Item
        name={"Email"}
        rules={[
          {
            type: "email",
            required: true,
            message: "Podaj swój email",
          },
        ]}
      >
        <Input
          className="register-form-input"
          prefix={<RedEnvelopeOutlined />}
          placeholder="Email"
        />
      </Form.Item>
      {userType === "employer" && formItemsEmployer}
      {userType === "candidate" && formItemsCandidate}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="register-form-button"
        >
          Zarejestruj się
        </Button>{" "}
        Masz konto? <Link to="/login">Zaloguj się</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
