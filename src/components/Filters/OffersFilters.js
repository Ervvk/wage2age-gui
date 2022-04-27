import React from "react";

import { Checkbox, Row, Col, Space } from "antd";
import { Typography } from "antd";

const OffersFilters = () => {
  const CheckboxGroup = Checkbox.Group;
  const { Title } = Typography;
  const plainOptions = [
    "Full time",
    "Part time",
    "Internship",
    "Contract",
    "Training",
  ];

  return (
    <div style={{ padding: "1em" }}>
      <Title level={5}>Type of employement</Title>
      <Checkbox.Group style={{ width: "200px" }}>
        <Space wrap direction="vertical">
          {plainOptions.map((option, idx) => {
            return <Checkbox value={option + idx}>{option}</Checkbox>;
          })}
        </Space>
      </Checkbox.Group>
    </div>
  );
};

export default OffersFilters;
