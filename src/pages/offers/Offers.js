import React from "react";
import { Input, Button } from "antd";
import "./Offers.less";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OffersFilters from "../../components/Filters/OffersFilters";
import OfferSearch from "../../components/OfferSearch/OfferSearch";
import OffersTable from "../../components/OffersTable/OffersTable";
import { offersData } from "./OffersDataExample";

const Offers = () => {
  return (
    <div className="offers-wrapper">
      <OfferSearch />
      <OffersTable offersData={offersData} />
    </div>
  );
};

export default Offers;
