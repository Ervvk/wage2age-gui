import React from "react";
import { Form, Input, InputNumber } from "antd";

import "../Register.less";

const RegisterFormCandidate = () => {
  return (
    <>
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
    </>
  );
};

export default RegisterFormCandidate;
