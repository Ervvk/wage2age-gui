import React, { useContext, useEffect, useState } from "react";
import "./UserOffers.less";
import { Typography } from "antd";
import { AuthContext } from "../../state/authContext";
import JobAppsTable from "../../components/JobAppsTable/JobAppsTable";
import { http } from "../../helpers/utils/http";
const { Title } = Typography;
const UserOffers = () => {
  const [jobAppsData, setJobAppsData] = useState([]);
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  const userID = authCtx.loggedUser.CandidateID;

  const fetchData = async () => {
    const response = await http({
      method: "GET",
      url: `/applications/candidate/${userID}`,
      headers: {
        accept: "*/*",
      },
    });
    if (response.data) setJobAppsData(response.data);
    else console.log(response.request);
  };

  useEffect(() => {
    if (userID) fetchData();
  }, [userID]);

  return (
    <div className="user-offers-wrapper">
      <Title level={3}> Moje aplikacje</Title>
      <JobAppsTable jobAppsData={jobAppsData} />
    </div>
  );
};

export default UserOffers;
