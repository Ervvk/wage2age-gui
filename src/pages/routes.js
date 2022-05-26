import React from "react";
import { Route, Routes } from "react-router-dom";

import Offers from "./offers/Offers";
import Offer from "./offerDetails/Offer";
import Login from "./login/Login";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Offers />} />
      <Route path="login" element={<Login />} />
      <Route path="offer" element={<Offer />} />
    </Routes>
  );
};

export default routes;
