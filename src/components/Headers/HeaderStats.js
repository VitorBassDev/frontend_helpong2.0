import React from "react";
import { Link } from "react-router-dom";

// components

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md: pt-32 pb-10 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">

            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg  relative z-10">
                <div className="w-full text-center lg:w-8/12">
                  <p className="text-4xl text-center">
                    <span role="img" aria-label="love">
                      😍
                    </span>
                  </p>
                  <h3 className="font-semibold text-3xl">
                  Informe uma nova Necessidade
                  </h3>
                
                  <div className="sm:block flex flex-col mt-10">
                    <Link
                      to="/admin/necessidade"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Cadastrar
                    </Link>
  
                    </div>
                    <div className="text-center mt-16"></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
