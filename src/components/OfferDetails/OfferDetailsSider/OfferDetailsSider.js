import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./OfferDetailsSider.less";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import OfferApplyForm from "../../OfferApply/OfferApplyForm";

const OfferDetailsSider = () => {
  const showModal = () => {};
  const location = useLocation();
  console.log(location.state);
  const detailsData = location.state.detailsData;

  return (
    <div className="details-sider">
      <div className="details-sider-salary">
        {" "}
        <span style={{ color: "grey" }}>Stawka: </span>
        <span> {detailsData.salary.value} pln/h</span>
      </div>

      <div className="details-sider-contract">
        <IoDocumentTextOutline />
        <span>{detailsData.info.contract}</span>
      </div>

      <Button type="primary" onClick={showModal} className="details-sider-btn">
        Aplikuj!
      </Button>
    </div>
  );
};

export default OfferDetailsSider;
