import React from "react";
import { Form, Input, Select, Button } from "antd";
import "../OfferEditor.less";

const selectOptions = {
  contract: ["Umowa o pracę", "Umowa o dzieło", "Umowa zlecenie", "B2B"],
  handicap: [
    "fiz, stopień lekki",
    "fiz, stopień umiarkowany",
    "umysł, stopień lekki",
    "umysł, stopień umiarkowany",
  ],
  education: ["wyższe", "średnie", "podstawowe", "inne"],
  pcSkill: ["brak", "podstawowa", "swobodna", "zaawansowana"],
  physical: ["brak", "lekka", "umiarkowana", "wymagająca"],
  experience: ["początkujący", "średniozaawansowany", "zaawansowany", "expert"],
  shifts: ["tryb dzienny", "tryb nocny", "tryb mieszany"],
  commuting: [
    "we własnym zakresie",
    "praca zdalna",
    "darmowy transport",
    "płatny transport",
  ],
  workTime: ["pełny etat", "3/4 etatu", "pół etatu", "do ustalenia"],
  leave: ["płatny", "bezpłatny", "częściowo płatny"],
};

const OfferDetailsForm = ({ navigSteps }) => {
  const onFinish = (values) => {
    console.log("elo");
    console.log(values);
    navigSteps.nextStep();
  };
  const handleFinishBtn = () => {
    navigSteps.nextStep();
  };
  const handleBackBtn = () => {
    navigSteps.prevStep();
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="handicap"
        rules={[
          {
            required: false,
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
        name="education"
        rules={[
          {
            required: false,
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
        name="pcSkill"
        rules={[
          {
            required: false,
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
        name="physical"
        rules={[
          {
            required: false,
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
        name="experience"
        rules={[
          {
            required: false,
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
        name="commuting"
        rules={[
          {
            required: false,
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
      <div className="offer-editor-btns">
        <Button onClick={handleBackBtn} type="primary">
          Wstecz
        </Button>
        <Button htmlType="submit" type="primary">
          Dalej
        </Button>
      </div>
    </Form>
  );
};

export default OfferDetailsForm;
