import React, { useState } from "react";
import { Button, Form, Select, Slider, Row, Col, InputNumber } from "antd";
import { selectOptions } from "../../assets/offersOptions";

const FiltersForm = ({ handleCloseModal, filterOffers }) => {
  const [inputValue, setInputValue] = useState(19);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  const onFinish = (values) => {
    console.log({ ...values, Salary: inputValue });
    filterOffers({ ...values, Salary: inputValue });
  };

  const SalarySlider = (
    <Row>
      <Col span={5}>
        {" "}
        <span style={{ color: "grey" }}>Min pln/h</span>
      </Col>
      <Col span={12}>
        <Slider
          min={19}
          max={200}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          placeholder="Wynagrodzenie"
          min={19}
          max={200}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
  return (
    <>
      <Form onFinish={onFinish}>
        {" "}
        <Form.Item
          name="Contract"
          rules={[
            {
              message: "Wybierz preferowany rodzaj umowy",
            },
          ]}
        >
          <Select
            placeholder="Rodzaj umowy"
            className="offer-edition-form-input"
            allowClear
          >
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Wymiar etatu"
            className="offer-edition-form-input"
            allowClear
          >
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Typ zmian"
            className="offer-edition-form-input"
            allowClear
          >
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Urlop"
            className="offer-edition-form-input"
            allowClear
          >
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Miejsce pracy"
            className="offer-edition-form-input"
            allowClear
          >
            {selectOptions.workplace.map((value, idx) => (
              <Option key={`workplace-${idx}`} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="Handicap"
          rules={[
            {
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Rodzaj/stopień niepełnosprawności"
            className="offer-edition-form-input"
            allowClear
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Wykształcenie"
            className="offer-edition-form-input"
            allowClear
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Obsługa komputera"
            className="offer-edition-form-input"
            allowClear
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Natężenie pracy fiz."
            className="offer-edition-form-input"
            allowClear
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Doświadczenie"
            className="offer-edition-form-input"
            allowClear
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
              message: "Wybierz jedną z opcji!",
            },
          ]}
        >
          <Select
            placeholder="Transport"
            className="offer-edition-form-input"
            allowClear
          >
            {selectOptions.commuting.map((value, idx) => (
              <Option key={`commuting-${idx}`} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="Salary">{SalarySlider}</Form.Item>
        <div className="offer-editor-btns">
          <Button onClick={handleCloseModal} type="primary">
            Anuluj
          </Button>
          <Button htmlType="submit" type="primary">
            Zapisz filtry
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FiltersForm;
