import React from "react";
import { RiTaskLine } from "react-icons/ri";
import "./OfferOverview.less";

const OfferOverview = ({ overviewItems }) => {
  console.log(overviewItems);
  return (
    <div className="offer-overview">
      <ul>
        {overviewItems.map((item) => {
          return (
            <li className="offer-overview-list-item">
              <span className="offer-overview-list-item-icon">
                <RiTaskLine />
              </span>
              <span> {item} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OfferOverview;
