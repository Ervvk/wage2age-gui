import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/authContext";
import { Button } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineBriefcase } from "react-icons/hi";

import "../OffersTable.less";

const OffersTableRow = ({ row, idx }) => {
  const authCtx = useContext(AuthContext);
  const navig = useNavigate();

  const tags = [row.Workplace, row.Experience];

  const handleOfferClick = () => {
    navig(`/offer/${row.OfferID}`, { replace: true });
  };

  const handleCandidatesRedirect = (e) => {
    navig(`/candidates/${row.OfferID}`, { replace: true });
    e.preventDefault(); // Error
    e.stopPropagation();
  };

  return (
    <div className="row" key={idx} onClick={handleOfferClick}>
      <div className="row-top-wrapper">
        <div className="row-title">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="row-company">
              <HiOutlineBriefcase />
              {row.CompanyName}
            </span>
            <span className="row-position">{row.PositionName}</span>
          </div>
        </div>
        <span className="row-days">
          {new Date(row.StartDate).toLocaleDateString()}{" "}
        </span>
      </div>
      <div className="row-mid-wrapper">
        <div className="tags">
          {tags?.map((tag, idx) => (
            <div key={idx} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="row-salary">
          <span>{row.Salary} pln/h</span>
        </div>
      </div>
      <div className="row-low-wrapper">
        <div className="row-location">
          <EnvironmentOutlined />
          <span>{` ${row.City}, Polska`}</span>
        </div>
        {authCtx.loggedUser.UserType === "Employer" && (
          <div className="row-candidates">
            <Button icon={<UserOutlined />} onClick={handleCandidatesRedirect}>
              Kandydaci
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OffersTableRow;
