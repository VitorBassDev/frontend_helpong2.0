import React from "react";

// components

//import CardTable from "components/Cards/CardTable.js";
import NecessidadeAtendida from "components/Necessidades/NecessidadeAtendida"
import NecessidadeNaoAtendida from "components/Necessidades/NecessidadeNaoAtendida"

export default function Tables() {
  return (
    <>
     <div className="flex flex-wrap mt-4">
        <div className="w-full mb-20 px-4">
          <NecessidadeAtendida color="dark" />
          
        </div>
        <div className="w-full mb-20 px-4">
          <NecessidadeNaoAtendida color="dark" />
        </div>
      </div>
    </>
  );
}