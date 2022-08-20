import React from "react";
import "./OfferDetailsEmployer.less";
import { useLocation } from "react-router-dom";

const OfferDetailsEmployer = () => {
  const location = useLocation();
  const detailsData = location.state.detailsData;
  return (
    <div className="details-employer-info">
      <h2>
        {" "}
        <span style={{ color: "darkblue" }}>{detailsData.employerName}</span>
      </h2>
      <span>
        {detailsData.location.street} {`, ${detailsData.location.city}`}
      </span>
    </div>
  );
};

export default OfferDetailsEmployer;
