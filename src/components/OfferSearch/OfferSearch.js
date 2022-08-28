import React, { useState } from "react";
import { Input, Button, Modal, Form, Select } from "antd";
import { citiesData } from "../../assets/cities";
import "./OfferSearch.less";
import "./OfferSearch.module.less";
import { AiOutlineFilter } from "react-icons/ai";
import FiltersForm from "../Filters/FiltersForm";

const OfferSearch = ({
  handleSetFilters,
  handleFilterOffers,
  handleResetFilters,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [positionInputValue, setPositionInputValue] = useState("");
  const [selectedVoivodeship, selectedVoivodeshipValue] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (filterRules) => {
    setIsModalVisible(false);
    handleSetFilters(filterRules);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearchButton = (values) => {
    handleSetFilters(values);

    handleFilterOffers();
  };
  return (
    <div className="offer-search">
      <span className="offer-search-title">Filtruj oferty pracy</span>{" "}
      <Form onFinish={handleSearchButton}>
        <div className="input-wrap">
          <Form.Item name="PositionName">
            <Input
              className="offer-search-input"
              placeholder="Nazwa stanowiska"
            />
          </Form.Item>
          <Form.Item name="Voivodeship">
            <Select placeholder="Województwo" className="offer-search-input">
              <Option key={0} value={""}>
                -
              </Option>
              {citiesData.map((city, idx) => {
                return (
                  <Option key={idx + 1} value={city.name}>
                    {city.displayName}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Button
            className="offer-search-btn-confirm"
            type="primary"
            htmlType="submit"
          >
            Wyszukaj
          </Button>
        </div>{" "}
      </Form>
      <div className="offer-search-filters">
        <Button
          className="offer-search-btn-filter"
          onClick={handleResetFilters}
        >
          <span style={{ paddingLeft: ".5rem" }}>Resetuj filtry</span>
        </Button>
        <Button
          className="offer-search-btn-filter"
          onClick={showModal}
          icon={<AiOutlineFilter />}
        >
          <span style={{ paddingLeft: ".5rem" }}>Więcej filtrów</span>
        </Button>
      </div>
      <Modal visible={isModalVisible} footer={null}>
        <FiltersForm handleCloseModal={handleCancel} filterOffers={handleOk} />
      </Modal>
    </div>
  );
};

export default OfferSearch;
