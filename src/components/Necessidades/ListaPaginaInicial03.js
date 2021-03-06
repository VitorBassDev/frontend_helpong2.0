import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './styles.css';

import api from '../../services/api';

function Necessidades() {

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
    <div className="profile-container">
    <ul>
      <li>
			{necessidade.map(incident =>(
				
          <section className="pb-0 bg-gray-300 -mt-10"
          	key={incident.id_necessidade}
          > 
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 ">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                      </div>

                        <h4 className="text-xl font-semibold mt-2 mb-4 ">
                        {incident.descricao}
                        </h4>
                        <h4 className="mt-2 mb-4 text-gray-600">
                        {incident.cidade}
                        </h4>
                        <h4 className="mt-2 mb-4 text-gray-600">
                        {incident.nome}
                        </h4>

                        <div className="sm:block flex flex-col mt-10">
                          <button>
                            <Link
                              to="doacao"
                              className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                              Entrar em Contato

                            </Link>
                          </button>
                        </div>
                    </div>
                            
                    </div>
                  </div>              
                </div>
              </div>     
            </section>
                    )
                    )}
          </li>          

      </ul>
      </div>
    </>
  )
}
export default Necessidades;