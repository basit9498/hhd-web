import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/variables.css";
import "../src/styles/style.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
