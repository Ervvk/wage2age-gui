import React, { useContext } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Login.less";
import "./Login.module.less";
import { http } from "../../helpers/utils/http";
import { AuthContext } from "../../state/authContext";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

  const onFinish = async (values) => {
    const response = await http({
      method: "GET",
      url: `/auth/${JSON.stringify(values)}`,
      headers: {
        accept: "*/*",
      },
    });

    if (response.status === 200) {
      authCtx.login(response.data);
    } else {
      message.error("Błędny login/hasło");
    }
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
        name="login"
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Zaloguj się
        </Button>
        Nie masz konta? <Link to="/register">Zarejestruj się!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
