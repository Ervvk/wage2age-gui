import React from "react";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OfferDetailsSider from "../../components/OfferDetails/OfferDetailsSider";
import "./Offer.less";
const Offer = () => {
  return (
    <div className="offer">
      <OfferDetails />
      <OfferDetailsSider />
    </div>
  );
};

export default Offer;
