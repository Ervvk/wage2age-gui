import React from "react";
import "./OfferDetails.less";
import { Typography } from "antd";
const OfferDetails = () => {
  const { Title } = Typography;
  return (
    <div className="details">
      <Title level={3}>Senior Floor Cleaner</Title>
      <div className="job-title">Geneve, Berlin Street 48</div>
      <div className="tags">
        <div className="tag">Full time</div>
        <div className="tag">Remote</div>
      </div>
      <div className="job-overview">
        <div>
          <b>Overview</b>
        </div>{" "}
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make ally type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentia
      </div>
      <div className="job-desc">
        <div>
          {" "}
          <b>Job description</b>
        </div>
        In the United States, the copyright notice consists of: "©" or the word
        "Copyright" or abbreviation "Copr."; the year of first publication of
        the copyrighted work; and. identification of the owner of the copyright,
        either by name, abbreviation, or other designation by which they are
        generally known. make ally type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentia{" "}
      </div>
    </div>
  );
};

export default OfferDetails;
