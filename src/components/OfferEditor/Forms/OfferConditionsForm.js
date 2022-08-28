import React from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
import { selectOptions } from "../../../assets/offersOptions";
import "../OfferEditor.less";

const OfferConditionsForm = ({ navigSteps }) => {
  const onFinish = (values) => {
    const resObj = { ...values };
    console.log(resObj);
    navigSteps.nextStep(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="PositionName"
        rules={[
          {
            required: true,
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
        name="Contract"
        rules={[
          {
            required: true,
            message: "Wybierz preferowany rodzaj umowy",
          },
        ]}
      >
        <Select placeholder="Rodzaj umowy" className="offer-edition-form-input">
          {selectOptions.contract.map((value, idx) => (
            <Option key={`contract-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="WorkTime"
        rules={[
          {
            required: true,
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
        name="Shifts"
        rules={[
          {
            required: true,
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
        name="Leave"
        rules={[
          {
            required: true,
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
        name="WorkPlace"
        rules={[
          {
            required: true,
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
        name="Salary"
        rules={[
          {
            required: true,
            message: "Podaj prawidłowe wynagrodzenie",
          },
        ]}
      >
        <InputNumber
          className="offer-edition-form-input-number"
          addonAfter="pln/h"
          placeholder="Wynagrodzenie"
          min={19}
          max={200}
        />
      </Form.Item>
      <div className="offer-editor-btns">
        <Button htmlType="submit" type="primary">
          Dalej
        </Button>
      </div>
    </Form>
  );
};

export default OfferConditionsForm;
