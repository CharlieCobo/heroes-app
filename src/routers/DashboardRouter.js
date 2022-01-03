import React from "react";
import { Routes, Route } from "react-router-dom";

import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/hero/HeroPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { SearchPage } from "../components/search/SearchPage";
import { Navbar } from "../shared/Navbar";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
