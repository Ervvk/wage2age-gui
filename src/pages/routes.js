import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register";
import Offers from "./offers/Offers";
import Offer from "./offer/Offer";
import Login from "./login/Login";
import UserOffers from "./userOffers/UserOffers";
import OfferEdition from "./offerEdition/OfferEdition";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Offers />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="offer" element={<Offer />} />
      <Route path="userOffers" element={<UserOffers />} />
      <Route path="offerEdition" element={<OfferEdition />} />
    </Routes>
  );
};

export default routes;
