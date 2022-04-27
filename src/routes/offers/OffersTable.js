import React from "react";
import { Table, Input, Button } from "antd";
import "./Offers.less";
import { HeartOutlined } from "@ant-design/icons";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OffersFilters from "../../components/Filters/OffersFilters";

const OffersTable = () => {
  const offersData = [
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      positionName: "Senior Floor Cleaner",
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      positionName: "Junior Developer",
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      positionName: "Java Developer",
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      positionName: "Python Developer",
    },
  ];
  const columns = [
    {
      title: "Last updated",
      dataIndex: "offerDate",
      key: "offerDate",
    },
    {
      title: "Company",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Expiration date",
      dataIndex: "expireDate",
      key: "expireDate",
    },
    {
      title: "Location",
      dataIndex: "city",
      key: " city",
    },
    {
      title: "Position",
      dataIndex: "positionName",
      key: "positionName",
    },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {" "}
      <div className="input-wrap">
        <Input.Group compact>
          <Input
            style={{ width: "500px" }}
            defaultValue="Find the job for me"
          />
          <Button type="primary">Submit</Button>
        </Input.Group>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OffersFilters />

        <div className="wrapper">
          {offersData.map((row) => {
            return (
              <div className="offer">
                <div className="top-wrapper">
                  <div className="icon"></div>
                  <div className="titles"> {row.positionName}</div>
                  <div className="like">
                    {" "}
                    <HeartOutlined />
                  </div>
                </div>
                <div className="tags">
                  <div className="tag">Full time</div>
                  <div className="tag">Remote</div>
                </div>
              </div>
            );
          })}
        </div>
        <OfferDetails />
      </div>{" "}
    </div>
  );
};

export default OffersTable;
