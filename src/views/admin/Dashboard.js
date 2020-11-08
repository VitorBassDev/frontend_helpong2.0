import React from "react";

// components
import NecessidadeAtendida from "components/Necessidades/NecessidadeAtendida.js";
import NecessidadeNaoAtendida from "components/Necessidades/NecessidadeNaoAtendida.js";


export default function Dashboard() {
  return (
    <>
      <NecessidadeAtendida />
      <NecessidadeNaoAtendida />
    </>
  );
}
