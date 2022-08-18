import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import OfferEditorListInput from "../OfferEditorListInput/OfferEditorListInput";
import "../OfferEditor.less";
const { TextArea } = Input;

const OfferDescriptionForm = ({ navigSteps }) => {
  const [descriptionData, setDescriptionData] = useState({});

  const onFinish = (values) => {
    navigSteps.nextStep();
    const description = { ...values, listsData: descriptionData };
    console.log(JSON.stringify(description));
  };
  const handleBackBtn = () => {
    navigSteps.prevStep();
  };

  const handleEditorsState = (editorInput) => {
    console.log("data edutor", editorInput);
    setDescriptionData((prev) => ({ ...prev, ...editorInput }));
  };

  return (
    <Form onFinish={onFinish}>
      {" "}
      <Form.Item>
        <TextArea rows={4} placeholder="Opis, max 350 znaków" maxLength={350} />
      </Form.Item>
      <OfferEditorListInput title={"Zadania"} setData={handleEditorsState} />
      <OfferEditorListInput title={"Wymagania"} setData={handleEditorsState} />
      <OfferEditorListInput title={"Benefity"} setData={handleEditorsState} />
      <div className="offer-editor-btns">
        <Button onClick={handleBackBtn} type="primary">
          Wstecz
        </Button>
        <Button htmlType="submit" type="primary">
          Dodaj ofertę
        </Button>
      </div>
    </Form>
  );
};

export default OfferDescriptionForm;
