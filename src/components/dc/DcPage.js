import React from "react";
import { validPublishers } from "../../data/heroes";
import { HeroesList } from "../hero/HeroesList";

export const DcPage = () => {
  return (
    <main className="pb-4">
      <h1 className="fs-2 fw-bold text-white">DC Page</h1>
      <HeroesList publisher={validPublishers[0]} />
    </main>
  );
};
