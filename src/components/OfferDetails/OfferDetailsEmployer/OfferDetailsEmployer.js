import React from "react";
import "./OfferDetailsEmployer.less";
import { useLocation } from "react-router-dom";

const OfferDetailsEmployer = ({ offerData }) => {
  return (
    <div className="details-employer-info">
      <h2>
        <span style={{ color: "darkblue" }}>
          {offerData.overview.CompanyName}
        </span>
      </h2>
      <span>
        {offerData.overview.Street} {` ${offerData.overview.City}`}
      </span>
    </div>
  );
};

export default OfferDetailsEmployer;
