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

const OfferDetails = ({ offerData }) => {
  const { Title } = Typography;
  console.log(offerData);
  return (
    <div className="details">
      {" "}
      <OfferHeader offerData={offerData} />
      <OfferInfo offerInfoData={offerData} />
      <h2>Zadania</h2>
      <OfferOverview
        overviewItems={[
          ...offerData.details.filter((detail) => detail.Type === "tasks"),
        ]}
      />
      <h2>Nasze wymagania</h2>
      <OfferOverview
        overviewItems={[
          ...offerData.details.filter(
            (detail) => detail.Type === "requirements"
          ),
        ]}
      />
      <h2>Opis stanowiska</h2>
      <OfferDescription descriptionContent={offerData.overview?.Description} />
      <h2>Dodatkowe benefity</h2>
      <OfferOverview
        overviewItems={[
          ...offerData.details.filter((detail) => detail.Type === "benefits"),
        ]}
      />
    </div>
  );
};

export default OfferDetails;
