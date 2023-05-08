import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {HashRouter,BrowserRouter} from "react-router-dom";
require("./index.css");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <HashRouter>
      <App />
      </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
