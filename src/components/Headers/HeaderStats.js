import React from "react";
import { Link } from "react-router-dom";

// components

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-300 md: pt-20 pb-10 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="container mx-auto justify-center items-center">  
            <div className="sm:block flex flex-col justify-center items-center  ">
              <Link
                to="/admin/necessidade"
                className="get-started justify-center text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active: uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Cadastrar nova necessidade
              </Link>
            </div>
            <div className="text-center mt-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}