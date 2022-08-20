import React from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
import { selectOptions } from "../../../assets/offersOptions";
import "../OfferEditor.less";

const OfferConditionsForm = ({ navigSteps }) => {
  const onFinish = (values) => {
    const resObj = { ...values };
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
        name="workTime"
        rules={[
          {
            required: false,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select placeholder="Wymiar etatu" className="offer-edition-form-input">
          {selectOptions.workTime.map((value, idx) => (
            <Option key={`workTime-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="shifts"
        rules={[
          {
            required: false,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select placeholder="Typ zmian" className="offer-edition-form-input">
          {selectOptions.shifts.map((value, idx) => (
            <Option key={`shifts-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="leave"
        rules={[
          {
            required: false,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select placeholder="Urlop" className="offer-edition-form-input">
          {selectOptions.leave.map((value, idx) => (
            <Option key={`leave-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="leave"
        rules={[
          {
            required: false,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Miejsce pracy"
          className="offer-edition-form-input"
        >
          {selectOptions.workplace.map((value, idx) => (
            <Option key={`workplace-${idx}`} value={value}>
              {value}
            </Option>
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
