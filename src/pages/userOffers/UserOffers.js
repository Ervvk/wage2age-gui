import React from "react";
import "./UserOffers.less";
import { offersData } from "../offers/OffersDataExample";
import OffersTable from "../../components/OffersTable/OffersTable";
const UserOffers = () => {
  return (
    <div className="user-offers-wrapper">
      <OffersTable offersData={offersData} />
    </div>
  );
};

export default UserOffers;
