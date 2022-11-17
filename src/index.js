import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
import Layout from "./layouts/default";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
