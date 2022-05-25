import React from "react";
import { Button, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ShareAltOutlined } from "@ant-design/icons";
import "./OfferDetails.less";
import "./OfferDetails.module.less";

const OfferDetails = () => {
  const { Title } = Typography;
  return (
    <div className="details">
      {" "}
      <i className="icon"></i>
      <Title level={3}>Senior Floor Cleaner</Title>
      <span>Brandex</span>
      <div className="job-title">Geneve, Berlin Street 48</div>
      <div className="tags">
        <div className="tag">Full time</div>
        <div className="tag">Remote</div>
      </div>
      <div className="job-overview">
        <div>
          <b>Overview</b>
        </div>{" "}
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make ally type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentia
        </p>
      </div>
      <div className="job-desc">
        <div>
          {" "}
          <b>Job description</b>
        </div>
        <ul>
          <li> nice Lorem type specimen book. It has</li>
          <li> type specimen book. It has su</li>
          <li> also the leap into electronic typesetting</li>
          <li> nown printer took a galley </li>
        </ul>
      </div>
    </div>
  );
};

export default OfferDetails;
