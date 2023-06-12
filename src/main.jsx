import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GiftApp } from "./GiftApp";
import { Provider } from "./context/Provider";

import "../app/css/base/index.css";
import "../app/css/layout/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <GiftApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
