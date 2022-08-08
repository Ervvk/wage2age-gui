import React from "react";
import { Pagination } from "antd";

import "./OffersTable.less";
import OffersTableRow from "./OffersTableElements/OffersTableRow";
import OffersTableSorter from "./OffersTableElements/OffersTableSorter";

const OffersTable = ({ offersData }) => {
  return (
    <div className="offers-table">
      <OffersTableSorter />
      {offersData.map((row, idx) => {
        return <OffersTableRow row={row} idx={idx} />;
      })}
      <Pagination></Pagination>
    </div>
  );
};

export default OffersTable;
