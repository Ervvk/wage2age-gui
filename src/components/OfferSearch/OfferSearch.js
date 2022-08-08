import React, { useState } from "react";
import { Input, Button, Modal } from "antd";
import CitySearchInput from "./CitySearchInput/CitySearchInput";
import "./OfferSearch.less";
import "./OfferSearch.module.less";
import { AiOutlineFilter } from "react-icons/ai";

const OfferSearch = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="offer-search">
      <span className="offer-search-title">Znajdź pracę dla siebie!</span>{" "}
      <div className="input-wrap">
        <Input
          className="offer-search-input"
          placeholder="Nazwa stanowiska, słowo kluczowe"
        />
        <CitySearchInput inputWidth={"60rem"} inputHeight={"6rem"} />
        <Button className="offer-search-btn-confirm" type="primary">
          Wyszukaj
        </Button>
      </div>{" "}
      <div className="offer-search-filters">
        <Button className="offer-search-btn-filter" onClick={showModal}>
          <AiOutlineFilter />
          <span style={{ paddingLeft: ".5rem" }}>Więcej filtrów</span>
        </Button>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

export default OfferSearch;
