import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { EnrollmentProvider } from "./context/EnrollmentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EnrollmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EnrollmentProvider>
  </React.StrictMode>
);