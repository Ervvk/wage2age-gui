import React from "react";
import { useState, useEffect } from "react";

import { Modal } from "antd";

const OfferApplyModal = ({ isVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

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
    <Modal
      style={{ color: "black" }}
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    ></Modal>
  );
};

export default OfferApplyModal;
