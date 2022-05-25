import React from "react";
import { Input, Button } from "antd";
import "./Offers.less";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OffersFilters from "../../components/Filters/OffersFilters";

import OffersTable from "../../components/OffersTable/OffersTable";
const Offers = () => {
  const offersData = [
    {
      offerDate: "2022-04-12",
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
      offerDate: "2022-04-25",
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
      offerDate: "2022-05-12",
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
      offerDate: "2022-05-09",
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
      offerDate: "2022-05-18",
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
      offerDate: "2022-05-12",
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
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
        <OffersTable dataset={offersData} />
      </div>
    </div>
  );
};

export default Offers;
