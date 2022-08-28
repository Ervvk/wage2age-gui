import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../helpers/utils/http";

import OfferDetails from "../../components/OfferDetails/OfferDetails";
import OfferDetailsSider from "../../components/OfferDetails/OfferDetailsSider/OfferDetailsSider";
import OfferDetailsEmployer from "../../components/OfferDetails/OfferDetailsEmployer/OfferDetailsEmployer";

import "./Offer.less";

const Offer = () => {
  const params = useParams();
  const [offerData, setOfferData] = useState(null);

  const fetchData = async () => {
    const response = await http({
      method: "GET",
      url: `/offer/${params.offerID}`,
      headers: {
        accept: "*/*",
      },
    });
    if (response.data) setOfferData(response.data);
    else console.log(response.request);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="offer">
      {offerData && (
        <>
          <OfferDetails offerData={offerData} />
          <div className="offer-sider">
            <OfferDetailsEmployer offerData={offerData} />
            <OfferDetailsSider offerData={offerData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Offer;
