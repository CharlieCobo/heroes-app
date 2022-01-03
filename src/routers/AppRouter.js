import React from "react";
import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../components/login/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </>
  );
};
