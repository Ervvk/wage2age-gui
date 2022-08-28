import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { AuthContext } from "./state/authContext";
import Header from "./components/Layout/Header/Header";
import Routes from "./pages/routes";

import "./App.less";
import "./App.module.less";

const App = () => {
  const { Content, Footer } = Layout;
  const navigate = useNavigate();

  const ctxInit = {
    isLoggedIn: false,
    loggedUser: {},
    login: () => {},
    logout: () => {},
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ctxInit
  );

  const handleLogin = useCallback(
    (loginPayload) => {
      setIsLoggedIn(true);
      setLoggedUser(loginPayload);
      localStorage.setItem("user", JSON.stringify(loginPayload));
      navigate("/", { replace: true });
    },
    [navigate]
  );

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setLoggedUser({ userType: "", login: "", userDetails: {} });
  }, []);

  const authValues = {
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    loggedUser: loggedUser,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authValues}>
      <Layout className="layout">
        <Header></Header>
        <Content>{<Routes />}</Content>
        <Footer>
          <span>Eryk Baranowski 2022 </span>
        </Footer>
      </Layout>
    </AuthContext.Provider>
  );
};

export default App;
