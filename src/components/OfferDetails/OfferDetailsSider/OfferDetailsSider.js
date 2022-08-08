import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./OfferDetailsSider.less";
import { IoDocumentTextOutline } from "react-icons/io5";
import OfferApplyForm from "../../OfferApply/OfferApplyForm";
const OfferDetailsSider = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="details-sider">
      <div className="details-sider-salary">
        {" "}
        <span style={{ color: "grey" }}>Stawka: </span>
        <span> 25-30 pln/h</span>
      </div>

      <div className="details-sider-contract">
        <IoDocumentTextOutline />
        <span>Umowa o pracę</span>
      </div>

      <Button type="primary" onClick={showModal} className="details-sider-btn">
        Aplikuj!
      </Button>
      <Modal
        title="Aplikuj"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <OfferApplyForm />
      </Modal>
    </div>
  );
};

export default OfferDetailsSider;
