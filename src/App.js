import React from "react";
import { Button } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OffersTable from "./routes/offers/OffersTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OffersTable />} />
      </Routes>
    </Router>
  );
};

export default App;
