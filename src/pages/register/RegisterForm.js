import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Upload, Select } from "antd";
import {
  UserOutlined,
  LockOutlined,
  UploadOutlined,
  RedEnvelopeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Register.less";
import { citiesData } from "../../assets/cities";
const { Option } = Select;
const RegisterForm = () => {
  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const onUserTypeChange = (value) => {
    setUserType(value);
    console.log(value);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const formItemsEmployer = (
    <>
      <Form.Item
        name={"company-name"}
        rules={[
          {
            required: true,
            message: "Podaj nazwę firmy",
          },
        ]}
      >
        <Input className="register-form-input" placeholder="Nazwa firmy" />
      </Form.Item>

      <Form.Item
        name="voivodeship"
        rules={[
          {
            required: true,
            message: "Wybierz województwo",
          },
        ]}
      >
        <Select placeholder="Województwo" className="register-form-input">
          {citiesData.map((city, idx) => {
            return (
              <Option key={idx} value={city.name}>
                {city.name}
              </Option>
            );
          })}
        </Select>
        {/*
        <CitySearchInput inputWidth="40rem" inputHeight="4rem" />*/}
      </Form.Item>
      <Form.Item
        name="city"
        rules={[
          {
            required: true,
            message: "Podaj nazwę miasta",
          },
        ]}
      >
        <Input placeholder="Miasto" className="register-form-input" />
      </Form.Item>
      <Form.Item
        name="street"
        rules={[
          {
            required: true,
            message: "Podaj adres siedziby firmy",
          },
        ]}
      >
        <Input placeholder="Ulica" className="register-form-input" />
      </Form.Item>
    </>
  );
  const formItemsCandidate = (
    <>
      {" "}
      <Form.Item
        name={"name"}
        rules={[
          {
            required: true,
            message: "Podaj swoje imię",
          },
        ]}
      >
        <Input className="register-form-input" placeholder="Imię" />
      </Form.Item>
      <Form.Item
        name={"surname"}
        rules={[
          {
            required: true,
            message: "Podaj swoje nazwisko",
          },
        ]}
      >
        <Input className="register-form-input" placeholder="Nazwisko" />
      </Form.Item>
      <Form.Item
        name={["age"]}
        rules={[
          {
            type: "number",
            min: 40,
            max: 120,
            required: true,
            message: "Podaj prawidłowy wiek (min 40 lat)",
          },
        ]}
      >
        <InputNumber className="register-form-input" placeholder="Wiek" />
      </Form.Item>
      <Form.Item name={"cv"}>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Dodaj CV</Button>
        </Upload>
      </Form.Item>
    </>
  );

  const [userType, setUserType] = useState("candidate");

  return (
    <Form
      name="normal_register"
      className="register-form"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={"userType"}>
        <Select
          onChange={onUserTypeChange}
          className="register-form-input"
          defaultValue="candidate"
        >
          <Option value="employer">Pracodawca</Option>
          <Option value="candidate">Kandydat</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="username"
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
          className="register-form-input"
          type="password"
          placeholder="Hasło"
        />
      </Form.Item>
      <Form.Item
        name={["email"]}
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
        Masz konto? <Link to="/login">Zaloguj sie</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
