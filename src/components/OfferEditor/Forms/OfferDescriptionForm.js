import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import OfferEditorListInput from "../OfferEditorListInput/OfferEditorListInput";
import "../OfferEditor.less";
const { TextArea } = Input;

const OfferDescriptionForm = ({ navigSteps }) => {
  const [descriptionData, setDescriptionData] = useState([]);

  const onFinish = (values) => {
    const description = { ...values, offerInfos: descriptionData };
    navigSteps.nextStep(description);
    console.log(JSON.stringify(description));
  };

  const handleEditorsState = (editorInput, listType) => {
    setDescriptionData((prev) => {
      const filteredArray = prev.filter((el) => el.type !== listType);
      console.log(filteredArray);
      return [...filteredArray, ...editorInput];
    });
  };

  return (
    <Form onFinish={onFinish}>
      {" "}
      <Form.Item
        name="Description"
        rules={[
          {
            required: true,
            message: "Uzupełnij opis",
          },
        ]}
      >
        <TextArea
          rows={4}
          placeholder="Opis, max 1000 znaków"
          maxLength={1000}
        />
      </Form.Item>
      <OfferEditorListInput
        listType={"tasks"}
        title={"Zadania"}
        setData={handleEditorsState}
      />
      <OfferEditorListInput
        listType={"requirements"}
        title={"Wymagania"}
        setData={handleEditorsState}
      />
      <OfferEditorListInput
        listType={"benefits"}
        title={"Benefity"}
        setData={handleEditorsState}
      />
      <div className="offer-editor-btns">
        <Button htmlType="submit" type="primary">
          Dodaj ofertę
        </Button>
      </div>
    </Form>
  );
};

export default OfferDescriptionForm;
