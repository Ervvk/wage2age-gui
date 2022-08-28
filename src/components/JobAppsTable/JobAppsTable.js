import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "antd";
import moment from "moment";

import "./JobAppsTable.less";

const JobAppsTable = ({ jobAppsData }) => {
  const navigate = useNavigate();

  const handleNavigateOfferBtn = (record) => {
    console.log(record);
    navigate(`/offer/${record.OfferID}`, { replace: true });
  };

  const highlightJobAppState = (stateID) => {
    if (stateID === 2) return "green";
    else if (stateID === 3) return "red";
    else return "black";
  };

  const columns = [
    {
      title: "Data aplikacji",
      dataIndex: "ApplicationDate",
      key: "ApplicationDate",
      sorter: (a, b) =>
        moment(a.ApplicationDate).unix() - moment(b.ApplicationDate).unix(),
      render: (a) => a.slice(0, 10),
    },
    {
      title: "Nazwa firmy",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "Pozycja",
      dataIndex: "PositionName",
      key: "PositionName",
    },
    {
      title: "Status",
      dataIndex: "JobAppState",
      key: "JobAppState",
      render: (_, record) => {
        return (
          <span
            style={{
              color: `${highlightJobAppState(record.JobAppStateID)}`,
            }}
          >
            {record.JobAppState}
          </span>
        );
      },
    },
    {
      title: "Zarządzaj aplikacją",
      key: "manage",
      render: (_, record) => (
        <Button
          onClick={() => {
            handleNavigateOfferBtn(record);
          }}
        >
          Przejdź do oferty
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={jobAppsData} columns={columns} />
    </div>
  );
};

export default JobAppsTable;
