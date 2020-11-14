import React from 'react';
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//import Navbar from "components/Navbars/AuthNavbar.js";
import ListaNecessidadePaginaInicial from "components/Necessidades/ListaPaginaInicial02"

export default function Landing() {

  return (
    <>
     
    {/*<Navbar fixed />*/}
    <IndexNavbar fixed />
      
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              "url(" + require("assets/img/Bg-novo01.png") + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 "
            ></span>
          </div>
        

        </div>
      </main>
      <ListaNecessidadePaginaInicial/>
      <Footer />
    </>
  );
}