import React from "react";
import "./CandidatesTable.less";
import { Table, Space } from "antd";
const CandidatesTable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Data aplikacji",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Imię",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Nazwisko",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Wiek",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Adres",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Pobierz CV</a>
          <a>Rekrutuj</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CandidatesTable;
