import React from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
import { citiesData } from "../../../assets/cities";
import CitySearchInput from "../../OfferSearch/CitySearchInput/CitySearchInput";
import "../OfferEditor.less";

const selectOptions = {
  contract: ["Umowa o pracę", "Umowa o dzieło", "Umowa zlecenie", "B2B"],
};

const OfferConditionsForm = ({ navigSteps }) => {
  const onFinish = (values) => {
    console.log("elo");
    const resObj = { ...values, country: "Polska" };
    console.log(resObj);
    navigSteps.nextStep();
  };
  const handleFinishBtn = () => {};
  const handleBackBtn = () => {
    navigSteps.prevStep();
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="company"
        rules={[
          {
            required: false,
            message: "Podaj nazwę firmy",
          },
        ]}
      >
        <Input placeholder="Nazwa firmy" className="offer-edition-form-input" />
      </Form.Item>
      <Form.Item
        name="positionName"
        rules={[
          {
            required: false,
            message: "Podaj nazwę pozycji!",
          },
        ]}
      >
        <Input
          placeholder="Nazwa pozycji"
          className="offer-edition-form-input"
        />
      </Form.Item>
      <Form.Item name="country">
        <Input
          placeholder="Kraj"
          value="Polska"
          defaultValue="Polska"
          disabled
          className="offer-edition-form-input"
        />
      </Form.Item>

      <Form.Item
        name="voivodeship"
        rules={[
          {
            required: false,
            message: "Podaj województwo",
          },
        ]}
      >
        <Select placeholder="Województwo" className="offer-edition-form-input">
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
            required: false,
            message: "Podaj nazwę miasta",
          },
        ]}
      >
        <Input placeholder="Miasto" className="offer-edition-form-input" />
      </Form.Item>
      <Form.Item
        name="street"
        rules={[
          {
            required: false,
            message: "Podaj adres firmy",
          },
        ]}
      >
        <Input placeholder="Ulica" className="offer-edition-form-input" />
      </Form.Item>
      <Form.Item
        name="contract"
        rules={[
          {
            required: false,
            message: "Wybierz preferowany rodzaj umowy",
          },
        ]}
      >
        <Select placeholder="Rodzaj umowy" className="offer-edition-form-input">
          {selectOptions.contract.map((value, idx) => (
            <Option key={`contract-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="salary"
        rules={[
          {
            required: false,
            message: "Podaj prawidłowe wynagrodzenie",
          },
        ]}
      >
        <InputNumber
          className="offer-edition-form-input-number"
          addonAfter="pln/h"
          placeholder="Wynagrodzenie"
          min={19}
          max={2000}
        />
      </Form.Item>
      <div className="offer-editor-btns">
        <Button onClick={handleBackBtn} type="primary">
          Wstecz
        </Button>
        <Button htmlType="submit" onClick={handleFinishBtn} type="primary">
          Dalej
        </Button>
      </div>
    </Form>
  );
};

export default OfferConditionsForm;
