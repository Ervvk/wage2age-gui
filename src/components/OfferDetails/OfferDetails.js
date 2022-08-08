import React from "react";
import { Button, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { ShareAltOutlined } from "@ant-design/icons";
import "./OfferDetails.less";
import "./OfferDetails.module.less";

import OfferHeader from "./OfferHeader/OfferHeader";
import OfferDescription from "./OfferDescription/OfferDescription";
import OfferOverview from "./OfferOverview/OfferOverview";
import OfferInfo from "./OfferInfo/OfferInfo";
import { useLocation } from "react-router-dom";

const OfferDetails = ({ offerData }) => {
  const location = useLocation();
  const detailsData = location.state.detailsData;
  console.log(" ELO ", JSON.stringify(location.state));
  const overviewTasks = [
    "Wykonywanie poleceń szefa",
    "Parzenie kawy w firmowej kuchni",
    "Testowanie oprogramowania dla estońskiego klienta",
    "Tworzenie dokumentacji z użyciem pakietu Microsoft",
  ];
  const overviewBenefits = [
    "Prywatna opieka medyczna",
    "Ubezpieczenie na życie",
    "Karta multisport",
    "Inicjatywy charytatywne i społeczne",
    "No dress code",
    "Karta zniżkowa na posiłki",
    "Parking dla pracowników",
  ];
  const overviewRequirements = [
    "Obsługa pakietu Microsoft w stopniu podstawowym",
    "Podstawy programowania w dowolnym języku obiektowym",
    "Komunikatywność i umiejętność pracy w zespole",
    "Umiejętność analitycznego myślenia",
    "Chęć do pracy i entuzjazm",
  ];
  const desc = `Tester oprogramowania to odpowiedzialna rola, która jest niezbędna dla każdego software house'u jakim jest Brandex.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make ally type specimen book. It has survived not only five centuries,
  but also the leap into electronic typesetting, remaining essentia  took a galley of type and scrambled it to
  make ally type specimen book. It has survived not only five centuries,
  but also the leap into electronic typesetting, remaining essenti`;

  const { Title } = Typography;
  return (
    <div className="details">
      {" "}
      <OfferHeader position={detailsData.positionName} />
      <OfferInfo offerInfoData={detailsData.info} />
      <h2>Zadania</h2>
      <OfferOverview overviewItems={detailsData.tasks} />
      <h2>Nasze wymagania</h2>
      <OfferOverview overviewItems={detailsData.requirements} />
      <h2>Opis stanowiska</h2>
      <OfferDescription descriptionContent={detailsData.description} />
      <h2>Dodatkowe benefity</h2>
      <OfferOverview overviewItems={detailsData.benefits} />
    </div>
  );
};

export default OfferDetails;
