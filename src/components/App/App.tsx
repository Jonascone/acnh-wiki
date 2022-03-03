import React from "react";
import PageHeader from "../PageHeader";
import { Route, Routes } from "react-router-dom";
import TypeGrid from "../TypeGrid";
import Creatures from "../Creatures";
import Items from "../Items";
import Villagers from "../Villagers";
import Construction from "../Construction";

function App() {
  return (
    <>
      <PageHeader />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<TypeGrid />} />
          <Route path="/creatures/:sourceSheet" element={<Creatures />} />
          <Route path="/items/:sourceSheet" element={<Items />} />
          <Route path="/Villagers" element={<Villagers />} />
          <Route path="/Construction" element={<Construction />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
