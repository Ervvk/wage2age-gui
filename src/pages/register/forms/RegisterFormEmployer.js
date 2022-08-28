import React from "react";
import { Form, Input, Select } from "antd";
import { citiesData } from "../../../assets/cities";

import "../Register.less";

const { Option } = Select;

export const RegisterFormEmployer = () => {
  return (
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
};
