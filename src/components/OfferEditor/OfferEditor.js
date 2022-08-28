import React, { useContext, useEffect, useState } from "react";
import "./OfferEditor.less";

import OfferConditionsForm from "./Forms/OfferConditionsForm";
import OfferDescriptionForm from "./Forms/OfferDescriptionForm";
import OfferDetailsForm from "./Forms/OfferDetailsForm";
import OfferEditorFinal from "./OfferEditorFinal";
import { http } from "../../helpers/utils/http";
import { AuthContext } from "../../state/authContext";

import { message, Steps } from "antd";

const { Step } = Steps;

const OfferEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentElement, setCurrentElement] = useState(<OfferConditionsForm />);
  const [offerData, setOfferData] = useState({});

  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.loggedUser;

  useEffect(() => {
    currentForm(currentStep);
  }, [currentStep]);

  const uploadOffer = async () => {
    const response = await http({
      method: "POST",
      url: `/offers`,
      headers: {
        accept: "*/*",
      },
      data: { ...offerData, CompanyID: loggedUser.CompanyID },
    });
    if ((response.status = 200)) {
      message.success("Pomyślnie dodano ofertę");
    } else {
      console.log("Nie udało się dodać oferty");
      console.log(response.request);
    }
  };

  const navigSteps = {
    nextStep: (data) => {
      setOfferData((prev) => {
        return { ...prev, ...data };
      });
      setCurrentStep((prev) => prev + 1);
    },
    prevStep: () => {
      if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    },
  };

  useEffect(() => {
    console.log("formData:", offerData);
  }, [offerData]);
  const currentForm = (step) => {
    console.log(step);
    switch (step) {
      case 0:
        setCurrentElement(<OfferConditionsForm navigSteps={navigSteps} />);
        break;
      case 1:
        setCurrentElement(<OfferDetailsForm navigSteps={navigSteps} />);
        break;
      case 2:
        setCurrentElement(<OfferDescriptionForm navigSteps={navigSteps} />);
        break;
      case 3:
        uploadOffer();
        setCurrentElement(<OfferEditorFinal />);
        break;
      default:
        setCurrentElement(<OfferConditionsForm navigSteps={navigSteps} />);
        break;
    }
  };

  return (
    <div className="offer-editor-wrapper">
      <Steps current={currentStep}>
        <Step title="Dane firmy / warunki zatrudnienia" />
        <Step title="Szczegóły oferty" />
        <Step title="Opis oferty" />
        <Step title="Sukces" />
      </Steps>
      <div className="offer-editor-form">{currentElement}</div>
    </div>
  );
};

export default OfferEditor;
