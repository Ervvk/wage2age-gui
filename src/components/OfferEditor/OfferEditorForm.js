import React from "react";
import { Form, Input, Select, Button } from "antd";
import CitySearchInput from "../OfferSearch/CitySearchInput/CitySearchInput";
import OfferEditorListInput from "./OfferEditorListInput/OfferEditorListInput";

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
const { TextArea } = Input;

const OfferEditorForm = () => {
  const onFinish = () => {};
  return (
    <Form
      name="offer-edition-form"
      className="offer-edition-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="company"
        rules={[
          {
            required: true,
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
      <Form.Item name="country">
        <Input
          placeholder="Kraj"
          defaultValue="Polska"
          disabled
          className="offer-edition-form-input"
        />
      </Form.Item>
      <Form.Item name="voivodeship">
        <CitySearchInput inputWidth="40rem" inputHeight="4rem" />
      </Form.Item>
      <Form.Item name="street">
        <Input placeholder="Ulica" className="offer-edition-form-input" />
      </Form.Item>
      <Form.Item name="contract">
        <Select placeholder="Rodzaj umowy" className="offer-edition-form-input">
          {selectOptions.contract.map((value, idx) => (
            <Option key={`contract-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <span>Szczegóły</span>
      <Form.Item name="handicap">
        <Select
          placeholder="Rodzaj/stopień niepełnosprawności"
          className="offer-edition-form-input"
        >
          {selectOptions.handicap.map((value, idx) => (
            <Option key={`handicap-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="education">
        <Select
          placeholder="Wykształcenie"
          className="offer-edition-form-input"
        >
          {selectOptions.education.map((value, idx) => (
            <Option key={`education-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="pcSkill">
        <Select
          placeholder="Obsługa komputera"
          className="offer-edition-form-input"
        >
          {selectOptions.pcSkill.map((value, idx) => (
            <Option key={`pcSkill-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="physical">
        <Select
          placeholder="Natężenie pracy fiz."
          className="offer-edition-form-input"
        >
          {selectOptions.physical.map((value, idx) => (
            <Option key={`physical-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="experience">
        <Select
          placeholder="Doświadczenie"
          className="offer-edition-form-input"
        >
          {selectOptions.experience.map((value, idx) => (
            <Option key={`experience-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="shifts">
        <Select placeholder="Typ zmian" className="offer-edition-form-input">
          {selectOptions.shifts.map((value, idx) => (
            <Option key={`shifts-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="commuting">
        <Select placeholder="Transport" className="offer-edition-form-input">
          {selectOptions.commuting.map((value, idx) => (
            <Option key={`commuting-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="workTime">
        <Select placeholder="Wymiar etatu" className="offer-edition-form-input">
          {selectOptions.workTime.map((value, idx) => (
            <Option key={`workTime-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="leave">
        <Select placeholder="Urlop" className="offer-edition-form-input">
          {selectOptions.leave.map((value, idx) => (
            <Option key={`leave-${idx}`}>{value}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <TextArea rows={4} placeholder="Opis, max 350 znaków" maxLength={350} />
      </Form.Item>

      <OfferEditorListInput />
      <Button type="primary">Zapisz</Button>
    </Form>
  );
};

export default OfferEditorForm;
