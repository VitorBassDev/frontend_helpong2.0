import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './styles.css';

import api from '../../services/api';

export default function Profile() {
  const [necessidade, setNecessidade] = useState([]);

  const ongId   = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('necessidade/listaPaginaInicial', {
    headers: {
      Authorization: ongId,
    }
    }).then(response =>{
      setNecessidade(response.data);
    })
  }, [ongId]);
  return (
    <>    
    {necessidade.map(necessidade =>( 
    <div className="profile-page">
      <section className="py-2 bg-gray-500 ">
        <div className="mx-auto px-4">  
          <div className=" relative flex flex-col min-w-0 bg-blue-200 sm:w-8/12 lg:w-10/12 mb-6 shadow-sm -mt-50"
            key={necessidade.id_necessidade}>
              <div className="px-4">
                <div className="flex flex-wrap justify-center items-center">
                  <div className="w-full lg:w-5/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3  sm:mt-0">
                      <button
                        className="text-1xl font-semibold bg-red-600 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-sm px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <Link to="doacao">
                          Entrar em Contato
                        </Link>
                      </button>
                    </div>
                  </div>
   
                </div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/help01.png")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {necessidade.identificador}
                        </span>
                        <span className="text-md  font-bold text-gray-700">Código de Rasterio</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <h3 className="text-3xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  {necessidade.nome}
                  </h3>
                  <div className="text-2xl font-semibold mb-2 text-gray-700 mt-5">
                    <i className="fas fa-briefcase text-lg text-gray-700 "></i>
                    <spam className="mr-2 "> {necessidade.cidade} </spam>
                   
                  </div>
       

                </div>
                <div className="mt-5 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {necessidade.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ))}
    </>
  );
}
