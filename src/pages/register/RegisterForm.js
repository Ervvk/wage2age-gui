import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Upload,
  Select,
  message,
} from "antd";
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
import { http, blobToBase64, b64toUrl } from "../../helpers/utils/http";

const RegisterForm = () => {
  const [userType, setUserType] = useState("candidate");

  /*
  const getFile = async (e) => {
    //let link = document.createElement("a");
    let obj = e.file.originFileObj;
    let blob = new Blob([e.file.originFileObj]);
    console.log("blobb", blob);
    var reader = new FileReader();
    const blob64 = await blobToBase64(blob);
    console.log("blobb", blob64);
    const formData = new FormData();

    formData.append("file", blob64);
    formData.append("name", e.file.originFileObj.name);
    const link = document.createElement("a");
    link.download = obj.name;
    link.href = await b64toUrl(blob64);
    link.click();
    /*download file from app
    const link = document.createElement("a");
    link.download = obj.name;
    link.href = await b64toUrl(blob64);
    link.click();
    

    const response = await http({
      method: "POST",
      url: `/candidate/addDocument`,
      headers: {
        "Content-Type": "multipart/form-data",
      },

      data: formData,
    });

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.file.originFileObj;
  };
  */

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

  const formItemsEmployer = (
    <>
      <Form.Item
        name={"CompanyName"}
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
        name="Voivodeship"
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
                {city.displayName}
              </Option>
            );
          })}
        </Select>
        {/*
        <CitySearchInput inputWidth="40rem" inputHeight="4rem" />*/}
      </Form.Item>
      <Form.Item
        name="City"
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
        name="Street"
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
        name={"Name"}
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
        name={"Surname"}
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
        name={"PhoneNumber"}
        rules={[
          {
            required: true,
            message: "Podaj nr tel. komórkowego (9 cyfr)",
          },
        ]}
      >
        <Input
          className="register-form-input"
          placeholder="Numer telefonu kom."
        />
      </Form.Item>
      <Form.Item
        name={["Age"]}
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
        <InputNumber
          defaultValue={40}
          style={{ width: "100%" }}
          className="register-form-input"
          placeholder="Wiek"
        />
      </Form.Item>
      <Form.Item name={"Document"}>
        <Input.TextArea
          placeholder={"Opisz swoje doświadczenie zawodowe"}
          className="register-form-textarea"
        ></Input.TextArea>
      </Form.Item>
      {/*
      <Form.Item name={"Document"} getValueFromEvent={getFile}>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Dodaj CV</Button>
        </Upload>
      </Form.Item>
      */}
    </>
  );

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
