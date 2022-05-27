import React from "react";
import { Button, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ShareAltOutlined } from "@ant-design/icons";
import "./OfferDetails.less";
import "./OfferDetails.module.less";

import OfferHeader from "./OfferHeader/OfferHeader";
import OfferDescription from "./OfferDescription/OfferDescription";
import OfferOverview from "./OfferOverview/OfferOverview";
import OfferInfo from "./OfferInfo/OfferInfo";

const OfferDetails = () => {
  const { Title } = Typography;
  return (
    <div className="details">
      {" "}
      <OfferHeader />
      <OfferInfo />
      <OfferOverview />
      <OfferDescription />
    </div>
  );
};

export default OfferDetails;
