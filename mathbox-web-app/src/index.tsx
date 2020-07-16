import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import Router from "./routes";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider>
    <Router></Router>
  </ToastProvider>,
  document.getElementById("root")
);
