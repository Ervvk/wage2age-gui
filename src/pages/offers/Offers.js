import React, { useContext, useEffect, useState } from "react";
import "./Offers.less";
import OfferSearch from "../../components/OfferSearch/OfferSearch";
import OffersTable from "../../components/OffersTable/OffersTable";
import { http } from "../../helpers/utils/http";
import { AuthContext } from "../../state/authContext";
const Offers = () => {
  const [offersData, setOffersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterRules, setFilterRules] = useState({});
  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.loggedUser;
  console.log(loggedUser);

  const fetchData = async () => {
    const req =
      loggedUser.UserType === "Employer"
        ? `/offers/${loggedUser.CompanyID}`
        : "/offers";
    const response = await http({
      method: "GET",
      url: req,
      headers: {
        accept: "*/*",
      },
    });

    if (response.status == 200) setOffersData(response.data.reverse());
    else console.log(response.request);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(offersData);
  }, [offersData]);

  const resetFilters = () => {
    setFilterRules({});
    setFilteredData(offersData);
  };

  const filterOffers = () => {
    if (offersData.length > 0 && Object.keys(filterRules).length > 0) {
      console.log(offersData);
      const filteredArr = offersData.filter((item) => {
        for (const key in filterRules) {
          if (
            filterRules[key] !== undefined &&
            item[key] !== filterRules[key] &&
            filterRules[key] !== ""
          ) {
            console.log(filterRules[key]);
            if (key !== "Salary" && key !== "PositionName") return false;
            if (key === "Salary")
              return item["Salary"] >= filterRules["Salary"];
            if (key === "PositionName") {
              const positionNameInput = item["PositionName"].toLowerCase();
              if (
                !positionNameInput.includes(
                  filterRules["PositionName"].toLowerCase()
                )
              ) {
                return false;
              }
            }
          }
        }
        return true;
      });
      console.log(filteredArr);

      setFilteredData(filteredArr);
    }
  };

  const handleSetFilters = (filters) => {
    setFilterRules((prev) => ({ ...prev, ...filters }));
  };

  useEffect(() => {
    filterOffers();
  }, [filterRules]);

  return (
    <div className="offers-wrapper">
      <OfferSearch
        handleSetFilters={handleSetFilters}
        handleFilterOffers={filterOffers}
        handleResetFilters={resetFilters}
      />
      <OffersTable offersData={filteredData} />
    </div>
  );
};

export default Offers;
