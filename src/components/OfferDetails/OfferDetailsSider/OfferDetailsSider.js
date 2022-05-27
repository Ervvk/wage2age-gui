import React from "react";
import { Button } from "antd";
import "./OfferDetailsSider.less";
import OfferInfoItem from "../OfferInfo/OfferInfoItem/OfferInfoItem";
import { IoDocumentTextOutline } from "react-icons/io5";
const OfferDetailsSider = () => {
  return (
    <div className="details-sider">
      <div className="details-sider-salary">
        {" "}
        <span style={{ color: "grey" }}>Stawka: </span>
        <span> 25-30 pln/h</span>
      </div>

      <div className="details-sider-contract">
        <IoDocumentTextOutline />
        <span>Umowa o pracę</span>
      </div>

      <Button type="primary" className="details-sider-btn">
        Aplikuj!
      </Button>
    </div>
  );
};

export default OfferDetailsSider;
