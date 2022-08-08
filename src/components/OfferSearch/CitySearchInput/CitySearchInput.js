import React from "react";
import { Select } from "antd";
import { citiesData } from "../../../assets/cities";
import "../OfferSearch.module.less";

const { Option } = Select;

const CitySearchInput = ({ inputWidth, inputHeight }) => {
  return (
    <Select
      showSearch
      style={{
        width: inputWidth,
        height: inputHeight,
      }}
      placeholder="Województwo"
      optionFilterProp="children"
      filterOption={(input, option) => option.children.includes(input)}
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      {citiesData.map((city, idx) => {
        return (
          <Option key={idx} value={city.name}>
            {city.name}
          </Option>
        );
      })}
    </Select>
  );
};

export default CitySearchInput;
