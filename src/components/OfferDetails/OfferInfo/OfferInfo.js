import React from "react";
import "./OfferInfo.less";
import OfferInfoItem from "./OfferInfoItem/OfferInfoItem";
import { BiHandicap } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdNightlight } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { CgTimelapse } from "react-icons/cg";
import { MdComputer } from "react-icons/md";
const OfferInfo = () => {
  const infoData = [
    {
      name: "Stopień / rodzaj niepełnosprawności",
      icon: <BiHandicap />,
      value: "fiz, stopień lekki",
    },
    {
      name: "Wymagane wykształcenie",
      icon: <FaUniversity />,
      value: "Wykształcenie wyższe",
    },
    {
      name: "Obsługa komputera",
      icon: <MdComputer />,
      value: "W stopniu podstawowym",
    },
    {
      name: "Praca fizyczna",
      icon: <GiBiceps />,
      value: "Umiarkowane natężenie",
    },
    {
      name: "Wymagane doświadczenie na stanowisku",
      icon: <AiOutlineLineChart />,
      value: "Początkujący",
    },
    {
      name: "Tryb pracy (dzienny / nocny / mieszany)",
      icon: <MdNightlight />,
      value: "Tryb dzienny",
    },
    {
      name: "Dojazd do miejsca pracy",
      icon: <FaBusAlt />,
      value: "We własnym zakresie",
    },
    {
      name: "Wymiar etatu",
      icon: <CgTimelapse />,
      value: "Pełny etat",
    },
  ];
  return (
    <div className="offer-info">
      {infoData.map((item, idx) => (
        <OfferInfoItem
          key={idx}
          icon={item.icon}
          value={item.value}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default OfferInfo;
