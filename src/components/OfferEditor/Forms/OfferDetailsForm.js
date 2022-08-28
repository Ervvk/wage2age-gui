import React from "react";
import { Form, Input, Select, Button } from "antd";
import "../OfferEditor.less";
import { selectOptions } from "../../../assets/offersOptions";

const OfferDetailsForm = ({ navigSteps }) => {
  const onFinish = (values) => {
    console.log("elo");
    console.log(values);
    navigSteps.nextStep(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="Handicap"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Rodzaj/stopień niepełnosprawności"
          className="offer-edition-form-input"
        >
          {selectOptions.handicap.map((value, idx) => (
            <Option key={`handicap-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="Education"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Wykształcenie"
          className="offer-edition-form-input"
        >
          {selectOptions.education.map((value, idx) => (
            <Option key={`education-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="PcSkill"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Obsługa komputera"
          className="offer-edition-form-input"
        >
          {selectOptions.pcSkill.map((value, idx) => (
            <Option key={`pcSkill-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="Physical"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Natężenie pracy fiz."
          className="offer-edition-form-input"
        >
          {selectOptions.physical.map((value, idx) => (
            <Option key={`physical-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="Experience"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select
          placeholder="Doświadczenie"
          className="offer-edition-form-input"
        >
          {selectOptions.experience.map((value, idx) => (
            <Option key={`experience-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="Commuting"
        rules={[
          {
            required: true,
            message: "Wybierz jedną z opcji!",
          },
        ]}
      >
        <Select placeholder="Transport" className="offer-edition-form-input">
          {selectOptions.commuting.map((value, idx) => (
            <Option key={`commuting-${idx}`} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <div className="offer-editor-btns">
        <Button htmlType="submit" type="primary">
          Dalej
        </Button>
      </div>
    </Form>
  );
};

export default OfferDetailsForm;
