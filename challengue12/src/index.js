import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AppRoutes } from "./components/AppRoutes";

ReactDOM.render(
  <Router>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
