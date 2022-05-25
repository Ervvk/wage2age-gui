import React from "react";
import { Button } from "antd";
import "./OfferDetails.less";
import style from "./OfferDetails.module.less";

const OfferDetailsSider = () => {
  return (
    <div className={style["details-sider"]}>
      OfferDetailsSider
      <Button type="primary" style={{ width: "50%" }}>
        Apply now!
      </Button>
    </div>
  );
};

export default OfferDetailsSider;
