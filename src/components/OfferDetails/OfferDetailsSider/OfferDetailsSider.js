import React, { useContext, useState } from "react";
import { Button, message, Modal } from "antd";
import "./OfferDetailsSider.less";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import OfferApplyForm from "../../OfferApply/OfferApplyForm";
import { AuthContext } from "../../../state/authContext";
import { http } from "../../../helpers/utils/http";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const OfferDetailsSider = ({ offerData }) => {
  const authCtx = useContext(AuthContext);
  const userData = authCtx.loggedUser;

  const postJobApplication = async () => {
    if (userData.UserType !== "Candidate") {
      return;
    }
    const jobAppData = {
      CandidateID: userData.CandidateID,
      OfferID: offerData.overview.OfferID,
      JobAppStatusID: 1,
    };

    const response = await http({
      method: "POST",
      url: `/offers/apply`,
      headers: {
        accept: "*/*",
      },
      data: jobAppData,
    });

    if (response.status === 200) {
      message.success(
        "Gratulacje, twoje zgłoszenie zostało wysłane do pracodawcy"
      );
    } else {
      message.error("Aplikacja nieudana");
    }
  };

  const showConfirm = () => {
    confirm({
      title: "Czy na pewno chcesz aplikować na tę ofertę?",
      icon: <ExclamationCircleOutlined />,
      okText: "Tak",
      cancelText: "Nie",

      onOk() {
        postJobApplication();
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div className="details-sider">
      <div className="details-sider-salary">
        {" "}
        <span style={{ color: "grey" }}>Stawka: </span>
        <span> {offerData.overview.Salary} pln/h</span>
      </div>

      <div className="details-sider-contract">
        <IoDocumentTextOutline />
        <span>{offerData.overview.Contract}</span>
      </div>
      {userData.UserType === "Candidate" ? (
        <Button
          type="primary"
          onClick={showConfirm}
          className="details-sider-btn"
        >
          Aplikuj!
        </Button>
      ) : (
        <span className="details-sider-warning">
          Zaloguj się jako kandydat aby aplikować
        </span>
      )}
    </div>
  );
};

export default OfferDetailsSider;
