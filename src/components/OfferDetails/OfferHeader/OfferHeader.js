import React from "react";
import { Button, message } from "antd";
import { HiOutlineBriefcase } from "react-icons/hi";
import { EnvironmentOutlined, ShareAltOutlined } from "@ant-design/icons";

import "./OfferHeader.less";

const OfferHeader = ({ offerData }) => {
  const handleShareBtn = () => {
    navigator.clipboard.writeText(window.location.href);
    message.success("Skopiowano adres oferty do schowka!");
  };

  return (
    <div className="details-header">
      <Button
        onClick={handleShareBtn}
        className="details-header-btn"
        icon={<ShareAltOutlined />}
      ></Button>
      <div className="details-header-top">
        <div className="details-header-position">
          <h1>{offerData.overview.PositionName}</h1>
        </div>
      </div>
      <div className="details-header-mid">
        <div className="details-header-detail details-header-detail-employer">
          <HiOutlineBriefcase />
          <span> {offerData.overview.CompanyName}</span>
        </div>
        <div className="details-header-detail details-header-detail-location">
          <EnvironmentOutlined />
          <span> {offerData.overview.City}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferHeader;
