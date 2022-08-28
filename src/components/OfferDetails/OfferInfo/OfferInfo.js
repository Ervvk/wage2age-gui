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
const OfferInfo = ({ offerInfoData }) => {
  const infoData = [
    {
      name: "Stopień / rodzaj niepełnosprawności",
      icon: <BiHandicap />,
      value: offerInfoData.overview.Handicap,
    },
    {
      name: "Wymagane wykształcenie",
      icon: <FaUniversity />,
      value: offerInfoData.overview.Education,
    },
    {
      name: "Obsługa komputera",
      icon: <MdComputer />,
      value: offerInfoData.overview.PcSkill,
    },
    {
      name: "Praca fizyczna",
      icon: <GiBiceps />,
      value: offerInfoData.overview.Physical,
    },
    {
      name: "Wymagane doświadczenie na stanowisku",
      icon: <AiOutlineLineChart />,
      value: offerInfoData.overview.Experience,
    },
    {
      name: "Tryb pracy (dzienny / nocny / mieszany)",
      icon: <MdNightlight />,
      value: offerInfoData.overview.Shifts,
    },
    {
      name: "Dojazd do miejsca pracy",
      icon: <FaBusAlt />,
      value: offerInfoData.overview.Commuting,
    },
    {
      name: "Wymiar etatu",
      icon: <CgTimelapse />,
      value: offerInfoData.overview.WorkTime,
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
