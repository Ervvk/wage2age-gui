import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import OffersTableRow from "./OffersTableElements/OffersTableRow";

import "./OffersTable.less";

const pageSize = 5;

const OffersTable = ({ offersData }) => {
  const [current, setCurrent] = useState(1);
  const [offersPaginatedData, setPaginatedData] = useState(offersData);

  useEffect(() => {
    onPageChange(1);
  }, [offersData]);

  useEffect(() => {
    const lastElID = pageSize * current;
    const firsElID = lastElID - pageSize;
    const pageData = offersData.slice(firsElID, lastElID);
    setPaginatedData(pageData);
  }, [current, offersData]);

  const onPageChange = (page) => {
    setCurrent(page);
  };

  return (
    <div className="offers-table">
      {offersPaginatedData.map((row, idx) => {
        return <OffersTableRow row={row} idx={idx} />;
      })}

      <Pagination
        onChange={onPageChange}
        defaultCurrent={1}
        pageSize={5}
        total={offersData.length}
        current={current}
      />
    </div>
  );
};

export default OffersTable;
