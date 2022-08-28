import React, { useState } from "react";
import "./CandidatesTable.less";
import { Table, Space, Button, Modal, Select, message } from "antd";
import { GrDocumentDownload } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { http } from "../../helpers/utils/http";

const { Option } = Select;

const CandidatesTable = ({ candidatesData, fetchCandidatesData }) => {
  const [isDocModalVisible, setDocModalVisible] = useState(false);
  const [modalContent, setModalConent] = useState("");

  const showDocModal = (documentContent) => {
    setDocModalVisible(true);
    setModalConent(documentContent);
  };

  const handleDocModalCancel = () => {
    setDocModalVisible(false);
  };

  const handleUpdateRecord = async (newAppState, appIdx) => {
    const response = await http({
      method: "PUT",
      url: `/offers/apps`,
      headers: {
        accept: "*/*",
      },
      data: { appID: appIdx, stateID: newAppState },
    });

    if (response.status === 200) {
      message.success("Status zgłoszenia został zaktualizowany");
      await fetchCandidatesData();
    } else {
      message.error("Nie udało się zaktualizować rekordu");
    }
  };

  const handleAppStateChange = async (val, opt, record) => {
    if (val !== record.JobAppStateID)
      await handleUpdateRecord(val, record.JobApplicationID);
  };
  const columns = [
    {
      title: "Data aplikacji",
      dataIndex: "ApplicationDate",
      key: "ApplicationDate",
      sorter: (a, b) =>
        moment(a.ApplicationDate).unix() - moment(b.ApplicationDate).unix(),
      render: (a) => a.slice(0, 10),
    },
    {
      title: "Imię",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Nazwisko",
      dataIndex: "Surname",
      key: "Surname",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Wiek",
      dataIndex: "Age",
      key: "Age",
    },
    { title: "Status", dataIndex: "JobAppState", key: "JobAppState" },
    {
      title: "Zarządzaj aplikacją",
      key: "manage",
      render: (_, record) => (
        <Space>
          <Button
            icon={<GrDocumentDownload />}
            onClick={() => {
              showDocModal(record.Document);
            }}
          ></Button>
          <Select
            onChange={(value, options) =>
              handleAppStateChange(value, options, record)
            }
            style={{ width: "200px" }}
            placeholder={"Status zgłoszenia"}
          >
            <Option key={"Job-state-1"} value={1}>
              W toku
            </Option>
            <Option key={"Job-state-2"} value={2}>
              Zaakceptowano
            </Option>
            <Option key={"Job-state-3"} value={3}>
              Odrzucono
            </Option>
          </Select>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={candidatesData} columns={columns} />
      <Modal
        title="Opis kandydata"
        visible={isDocModalVisible}
        onCancel={handleDocModalCancel}
        footer={null}
      >
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
};

export default CandidatesTable;
