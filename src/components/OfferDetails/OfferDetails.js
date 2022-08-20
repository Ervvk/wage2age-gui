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
import { useLocation } from "react-router-dom";

const OfferDetails = ({ offerData }) => {
  const location = useLocation();
  const detailsData = location.state.detailsData;
  console.log(" ELO ", JSON.stringify(location.state));

  const { Title } = Typography;
  return (
    <div className="details">
      {" "}
      <OfferHeader position={detailsData.positionName} />
      <OfferInfo offerInfoData={detailsData.info} />
      <h2>Zadania</h2>
      <OfferOverview overviewItems={detailsData.tasks} />
      <h2>Nasze wymagania</h2>
      <OfferOverview overviewItems={detailsData.requirements} />
      <h2>Opis stanowiska</h2>
      <OfferDescription descriptionContent={detailsData.description} />
      <h2>Dodatkowe benefity</h2>
      <OfferOverview overviewItems={detailsData.benefits} />
    </div>
  );
};

export default OfferDetails;
