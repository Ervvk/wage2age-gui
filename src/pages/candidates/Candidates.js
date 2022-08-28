import React, { useEffect, useState } from "react";
import CandidatesTable from "../../components/CandidatesTable/CandidatesTable";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import "./Candidates.less";
import { http } from "../../helpers/utils/http";
const { Title } = Typography;
const Candidates = () => {
  const params = useParams();
  const [candidatesData, setCandidatesData] = useState([]);

  const fetchData = async () => {
    const response = await http({
      method: "GET",
      url: `/offers/apps/${params.offerID}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        accept: "*/*",
      },
    });
    if ((response.status = 200)) setCandidatesData(response.data);
    else console.log(response.request);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="candidates-wrapper">
      <Title level={3}> Kandydaci</Title>
      <CandidatesTable
        candidatesData={candidatesData}
        fetchCandidatesData={fetchData}
      />
    </div>
  );
};

export default Candidates;
