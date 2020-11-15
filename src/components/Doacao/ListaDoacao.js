import React, { useState, useEffect} from 'react';
import api from '../../services/api';

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//import ListaNecessidade from "components/Necessidades/listaNecessidade.js"

function Doacao() {

  const [doacao, setDoacao] = useState([]);
  //const ongId   = localStorage.getItem('ongId');
  
  useEffect(() => {
    api.get(`necessidade/listaPaginaDoacao`, {

    }).then(response =>{
      setDoacao(response.data);
    })
  }, 
  );

  return (
    <> 

      <IndexNavbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              "url(" + require("assets/img/Bg-novo01.png") + ")",
          
            }}
          >

          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        {doacao.map(doacao =>(
      <section className="relative py-16 bg-gray-300"
      
      key={doacao.id_necessidade}>
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 ">
            <div className="px-6"> 
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="flex justify-right py-4 lg:pt-4 pt-8">
                  <i className="fas fa-phone-alt text-lg text-gray-700 "></i> <br/>
                    <div className="mr-5 p-3 text-center">
                      <span className="text-xl font-bold block  tracking-wide text-gray-700">
                      ({doacao.ddd})
                      </span>
                      <span className="text-sm text-gray-700">DDD</span>
                    </div>
                                        
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block  tracking-wide text-gray-700">
                      {doacao.numero}
                      </span>
                      <span className="text-sm text-gray-700">Telefone</span>
                    </div>
                    |
                    |
                    |
                    |
                    
                    <div className="mr-5 p-3 text-center">
                      
                      <span className="text-xl font-bold block  tracking-wide text-gray-700">
                      <i className="fas fa-barcode text-lg text-gray-700 "></i> <br/>
                      {doacao.identificador}
                      </span>
                      <span className="text-sm text-gray-700">Identificador</span>
                        
                    </div>
                    |
                    |
                    |
                    |
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <h3 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                 {doacao.nome}
                </h3>
                <div className="text-2xl font-semibold mb-2 text-gray-700 mt-5">
                  <i className="fas fa-map-marker-alt text-xl text-gray-700 "></i>
                  <spam className="mr-4 "> {doacao.cidade} - 
                  </spam>
                    {doacao.bairro} {doacao.logadouro} -
                    {doacao.cep}
                </div>
              </div>
              <div className="mt-5 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-xl 9/12 px-4">
                    <p className="text-2xl font-semibold mb-4 text-lg leading-relaxed text-gray-800">
                    {doacao.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            )
            )}
    </main>
    <Footer />
  </>
  );
}
export default Doacao;