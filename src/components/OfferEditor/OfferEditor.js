import React, { useEffect, useState } from "react";
import "./OfferEditor.less";

import OfferConditionsForm from "./Forms/OfferConditionsForm";
import OfferDescriptionForm from "./Forms/OfferDescriptionForm";
import OfferDetailsForm from "./Forms/OfferDetailsForm";
import OfferEditorFinal from "./OfferEditorFinal";

import { Steps } from "antd";

const { Step } = Steps;

const OfferEditor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentElement, setCurrentElement] = useState(<OfferConditionsForm />);

  useEffect(() => {
    currentForm(currentStep);
  }, [currentStep]);

  const navigSteps = {
    nextStep: () => {
      setCurrentStep((prev) => prev + 1);
    },
    prevStep: () => {
      if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    },
  };

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
