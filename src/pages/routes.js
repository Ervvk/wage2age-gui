import React, { useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../state/authContext";

import Home from "./home/Home";
import Register from "./register/Register";
import Offers from "./offers/Offers";
import Offer from "./offer/Offer";
import Login from "./login/Login";
import UserOffers from "./userOffers/UserOffers";
import OfferEdition from "./offerEdition/OfferEdition";
import Candidates from "./candidates/Candidates";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  const authCtx = useContext(AuthContext);
  if (!isAllowed) {
    if (authCtx.isLoggedIn) authCtx.logout();
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const routes = () => {
  const authCtx = useContext(AuthContext);
  const userRole = authCtx?.loggedUser.UserType || "";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/offer/:offerID" element={<Offer />} />
      <Route element={<ProtectedRoute isAllowed={userRole === "Candidate"} />}>
        <Route path="userOffers" element={<UserOffers />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={userRole === "Employer"} />}>
        <Route path="offerEdition" element={<OfferEdition />} />
        <Route path="candidates/:offerID" element={<Candidates />} />
      </Route>
    </Routes>
  );
};

export default routes;
