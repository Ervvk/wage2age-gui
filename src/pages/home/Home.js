import React from "react";
import loginLogo from "../../assets/graphics/login_logo.svg";
const Home = () => {
  return (
    <div>
      <h1>Witaj w serwisie WAGE2AGE</h1>
      <img src={loginLogo} style={{ width: "450px", marginTop: "120px" }}></img>
    </div>
  );
};

export default Home;
