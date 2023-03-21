import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import { router } from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
