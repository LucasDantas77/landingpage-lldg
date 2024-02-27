import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";

import { ServicesPage } from "../components/servicos/servicos";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/servicos" element={<ServicesPage />} />
    </Routes>
  );
};
