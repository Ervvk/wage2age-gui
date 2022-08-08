import React from "react";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OfferDetailsSider from "../../components/OfferDetails/OfferDetailsSider/OfferDetailsSider";
import OfferDetailsEmployer from "../../components/OfferDetails/OfferDetailsEmployer/OfferDetailsEmployer";
import "./Offer.less";
const Offer = () => {
  return (
    <div className="offer">
      <OfferDetails />
      <div className="offer-sider">
        <OfferDetailsSider />
        <OfferDetailsEmployer />
      </div>
    </div>
  );
};

export default Offer;
