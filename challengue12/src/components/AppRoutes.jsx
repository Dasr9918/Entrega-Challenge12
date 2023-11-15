import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserRoutes } from "./UserRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <UserRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
