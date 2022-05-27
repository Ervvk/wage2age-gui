import React from "react";
import "./OfferHeader.less";
import { HiOutlineBriefcase } from "react-icons/hi";
import { EnvironmentOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";

const OfferHeader = ({ position }) => {
  return (
    <div className="details-header">
      <Button
        className="details-header-btn"
        icon={<ShareAltOutlined />}
      ></Button>
      <div className="details-header-top">
        <div className="details-header-position">
          <h1>Tester oprogramowania</h1>
        </div>
      </div>
      <div className="details-header-mid">
        <div className="details-header-detail details-header-detail-employer">
          <HiOutlineBriefcase />
          <span> Brandex</span>
        </div>
        <div className="details-header-detail details-header-detail-location">
          <EnvironmentOutlined />
          <span> Kraków</span>
        </div>
      </div>
    </div>
  );
};
//     <div className="details-header-graphic"></div>
export default OfferHeader;
