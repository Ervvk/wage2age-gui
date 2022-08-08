import React from "react";
import "./OfferDescription.less";

const OfferDescription = ({ descriptionContent }) => {
  return (
    <div className="offer-description">
      <p>{descriptionContent}</p>
    </div>
  );
};

export default OfferDescription;
