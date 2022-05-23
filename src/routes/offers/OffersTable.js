import React from "react";
import { Table, Input, Button, Pagination } from "antd";
import "./Offers.less";
import { HeartOutlined } from "@ant-design/icons";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OffersFilters from "../../components/Filters/OffersFilters";
import { Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const OffersTable = () => {
  const { Title } = Typography;
  const offersData = [
    {
      offerDate: "2022-01-12",
      companyName: "Auchan",
      expireDate: "2022-10-11",
      city: "Siemianowice",
      country: "Poland",
      locationDetails: "Krecik street 12",
      positionName: "Senior Floor Cleaner",
      salary: [120, 140],
      remote: false,
      tags: ["Full time", "Handicap"],
    },
    {
      offerDate: "2022-01-12",
      companyName: "Amir kebab",
      expireDate: "2022-10-11",
      city: "Katowice",
      country: "Poland",
      locationDetails: "Kosciuszki 2",
      positionName: "Junior Backend Developer",
      salary: [90, 100],
      tags: ["Full time", "Handicap"],
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Warsaw",
      country: "Poland",
      locationDetails: "Krecik street 12",
      positionName: "Java Developer",
      salary: [90, 100],
      tags: ["Half time", "Handicap", "Remote"],
    },
    {
      offerDate: "2022-01-12",
      companyName: "Shoplo",
      expireDate: "2022-10-11",
      city: "Prague",
      country: "Czech Republic",
      locationDetails: "Krecik street 12",
      positionName: "Regular DevOps",
      salary: [120, 120],
      tags: ["Full time", "High efficiency"],
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      country: "Poland",
      locationDetails: "Krecik street 12",
      positionName: "Java Developer",
      salary: [120, 140],
      tags: ["Full time", "Handicap"],
    },
    {
      offerDate: "2022-01-12",
      companyName: "Brandex",
      expireDate: "2022-10-11",
      city: "Prague",
      country: "Poland",
      locationDetails: "Krecik street 12",
      positionName: "Python Developer",
      salary: [120, 120],
      tags: ["Full time", "Handicap"],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <div className="input-wrap">
        <Input.Group compact>
          <Input
            style={{ width: "500px", height: "45px" }}
            defaultValue="Find the job for me"
          />
          <Button style={{ height: "45px" }} type="primary">
            Submit
          </Button>
        </Input.Group>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1em" }}>
        <OffersFilters />

        <div className="offers-table">
          {offersData.map((row) => {
            return (
              <div className="offer">
                <div className="offer-top-wrapper">
                  <div className="offer-title">
                    <i className="icon"></i>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "21px",
                          transform: "translateY(-2px)",
                          letterSpacing: ".5px",
                        }}
                      >
                        {row.positionName}
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "17px",
                          fontWeight: "500",
                        }}
                      >
                        {row.companyName}
                      </span>
                    </div>
                  </div>

                  <Button icon={<HeartOutlined />}></Button>
                </div>
                <div className="offer-mid-wrapper">
                  <div className="offer-location">
                    {" "}
                    <EnvironmentOutlined />
                    <span>{` ${row.city}, ${row.country}`}</span>
                  </div>
                  <div className="offer-salary">
                    <span>
                      {row.salary[0] === row.salary[1]
                        ? `${row.salary[0]} pln/h`
                        : `${row.salary[0]} - ${row.salary[1]} pln/h`}
                    </span>
                  </div>
                </div>
                <div className="offer-low-wrapper">
                  <div className="tags">
                    {row.tags.map((tag, idx) => (
                      <div key={idx} className="tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div>
                    <span style={{ fontStyle: "italic" }}>
                      end - {row.expireDate}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <Pagination></Pagination>
        </div>

        <OfferDetails />
      </div>{" "}
    </div>
  );
};

export default OffersTable;
