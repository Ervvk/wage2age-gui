import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Login.less";
import "./Login.module.less";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Podaj swój login!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Nazwa użytkownika"
          className="login-form-input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Podaj swoje hasło!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          className="login-form-input"
          type="password"
          placeholder="Hasło"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Pamiętaj mnie</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Zaloguj się
        </Button>
        Nie masz konta? <Link to="/register">Zarejestruj się!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
