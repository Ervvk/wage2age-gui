import React from "react";
import { Select } from "antd";

const OffersTableSorter = () => {
  return (
    <Select placeholder="Sortuj według" style={{ width: "18rem" }}>
      <Option value="date">Data dodania</Option>
      <Option value="abc-asc">Abc rosnąco</Option>
      <Option value="abc-desc">Abc malejąco</Option>
    </Select>
  );
};

export default OffersTableSorter;
