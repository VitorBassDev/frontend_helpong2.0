import React from "react";


import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {

  const ongName = localStorage.getItem('ongNome')

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0  w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center pt-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <span className="text-white text-lg hidden lg:inline-block font-semibold uppercase my-10">
            Bem Vindo
          </span>
            
            <div className="w-full lg:w-6/12 px-4 mt-5 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-4xl uppercase">
                  {ongName}
                </h1>
              </div>
            </div>

          {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
        </div>
      </nav>
      
      {/* End Navbar */}
    </>
  );
}
