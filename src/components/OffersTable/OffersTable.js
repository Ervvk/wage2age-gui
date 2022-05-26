import React from "react";
import { Table, Input, Button, Pagination } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { countDays } from "../../helpers/scripts/calcs";
import "./OffersTable.less";
import { HiOutlineBriefcase } from "react-icons/hi";

const OffersTable = ({ dataset }) => {
  const navig = useNavigate();

  const handleOfferClick = () => {
    navig("/offer", { replace: true });
  };

  return (
    <div className="offers-table">
      {dataset.map((row, idx) => {
        return (
          <div className="row" key={idx} onClick={handleOfferClick}>
            <div className="row-top-wrapper">
              <div className="row-title">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="row-company">
                    <HiOutlineBriefcase />
                    {row.companyName}
                  </span>
                  <span className="row-position">{row.positionName}</span>
                </div>
              </div>
              <span className="row-days">
                {countDays(row.offerDate)} days ago
              </span>
            </div>
            <div className="row-mid-wrapper">
              <div className="tags">
                {row.tags.map((tag, idx) => (
                  <div key={idx} className="tag">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="row-salary">
                <span>
                  {row.salary[0] === row.salary[1]
                    ? `${row.salary[0]} pln/h`
                    : `${row.salary[0]} - ${row.salary[1]} pln/h`}
                </span>
              </div>
            </div>
            <div className="row-low-wrapper">
              <div className="row-location">
                <EnvironmentOutlined />
                <span>{` ${row.city}, ${row.country}`}</span>
              </div>
              <div>
                <Button icon={<HeartOutlined />}></Button>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination></Pagination>
    </div>
  );
};

export default OffersTable;
