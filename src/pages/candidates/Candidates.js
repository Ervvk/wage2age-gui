import React from "react";
import CandidatesTable from "../../components/CandidatesTable/CandidatesTable";
import { Typography } from "antd";
import "./Candidates.less";

const { Title } = Typography;
const Candidates = () => {
  return (
    <div className="candidates-wrapper">
      <Title level={3}> Kandydaci</Title>
      <CandidatesTable />
    </div>
  );
};

export default Candidates;
