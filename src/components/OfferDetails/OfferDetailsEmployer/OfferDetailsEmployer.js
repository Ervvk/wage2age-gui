import React from "react";
import "./OfferDetailsEmployer.less";
const OfferDetailsEmployer = () => {
  return (
    <div className="details-employer-info">
      <h2>
        {" "}
        <span style={{ color: "darkblue" }}>Brandex sp.z.o.o</span>, Kraków
      </h2>
      <span>ul.Kościuszki 12b, Software House</span>
      <div className="details-employer-description">
        <h3>
          <b>O firmie</b>
        </h3>
        <p>
          Brandex to potentat branży oprogramowania cyfrowego, który na
          krakowskim rynku pojawił sie w 1994 roku jako sklep z jabłkami. Z
          czasem właściciel Piotr Kowal przebranżowił mały sklep z owocami na
          pracownię programistyczną, której CEO jest do dzisiaj. W 2021r.
          Brandex ma już 120 pracowników w całej Polsce i oddział w Estonii.
          Firma zajmuje się głównie wytwarzaniem rozwiązań przemysłowych w celu
          szeroko pojętej automatyzacji. Obecnie szukamy w całej polsce
          testerów, którzy sprawdzą nasze produkty.
        </p>
      </div>
    </div>
  );
};

export default OfferDetailsEmployer;
