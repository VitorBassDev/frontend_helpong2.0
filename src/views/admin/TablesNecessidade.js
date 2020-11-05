import React from "react";

// components

//import CardTable from "components/Cards/CardTable.js";
import NecessidadeOng from "components/Necessidades/NecessidadeOng"

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <NecessidadeOng color="dark" />
        </div>
      </div>
    </>
  );
}
