import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const OfferEditorFinal = () => {
  return (
    <Result
      status="success"
      title="Twoje ogłoszenie zostało dodane!"
      subTitle="Wkrótce nowi kandydaci dowiedzą sie o twojej firmie"
      extra={[
        <Button type="primary">
          <Link to="/">Powrót do serwisu</Link>
        </Button>,
      ]}
    />
  );
};

export default OfferEditorFinal;
