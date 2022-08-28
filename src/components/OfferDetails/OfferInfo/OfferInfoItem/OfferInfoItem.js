import React from "react";
import { Tooltip } from "antd";

import "./OfferInfoItem.less";

const OfferInfoItem = ({ name, icon, value }) => {
  return (
    <div className="offer-info-item">
      <Tooltip title={name}>
        <div className="offer-info-item-icon">{icon}</div>
      </Tooltip>
      <Tooltip title={value}>
        <span className="offer-info-item-val">{value}</span>
      </Tooltip>
    </div>
  );
};

export default OfferInfoItem;
