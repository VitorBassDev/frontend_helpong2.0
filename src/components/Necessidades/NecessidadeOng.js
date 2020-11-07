import React, { useState, useEffect} from 'react';
import {Link } from "react-router-dom";
import api from '../../services/api';

import PropTypes from "prop-types";

function NecessidadesOng({ color }) {
		
  const [necessidade, setNecessidade] = useState([]);
  
  const ongId  = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('necessidade/necessidadeOngTest', {

    headers: {
      Authorization: ongId,
    }
    }).then(response =>{
      setNecessidade(response.data);
    })
  }, [ongId]);
  
  async function handleDeleteIncident(id_necessidade){
    try{
  
      await api.delete(`necessidade/deletaNecessidade/${id_necessidade}`, {
        headers:{
          Authorization: ongId,
        }
        
      },
      alert('Caso deletado com sucesso')
      );

      setNecessidade(necessidade.filter(incident => incident.id_necessidade!==id_necessidade ));
  } catch (err){
    alert('Erro ao Deletar o Caso');
  }
}

  async function ReceberDoacao(id_necessidade){
    try{

    api.put(`doacao/receberDoacao/${id_necessidade}`, {
      headers:{
        Authorization: ongId,
      }
    },
      //console.log(resposta),
      alert('Necessidade Atendida')
    );

        setNecessidade(necessidade.filter(incident => incident.id_necessidade!==id_necessidade ));
    } catch (err){
      console.log(err)
        alert('Deu nessa bagaça');
    }
}


async function EditarNecessidade(id_necessidade){
  try{
    await api.get(`necessidade/buscaId/${id_necessidade}`, {
      headers:{
        Authorization: ongId,
      }
    },
  
    alert('Cheguei Aqui')
    );

      setNecessidade(necessidade.filter(incident => incident.id_necessidade!==id_necessidade ));
    } catch (err){
      alert('Deu Erro aqui');
    }
}

  return (      
    <>
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg  uppercase" +
                (color === "light" ? "text-gray-800" : "text-white")
              }
            >
              Necessidades não atendidas
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
    
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                Título
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                descrição
              </th>
            
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                quantidade
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                situação
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                identificador
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                Opções
              </th>
            </tr>
          </thead>

          {necessidade.map(incident =>(
            <tbody>
              <tr>
                <th 
                  key={incident.id_necessidade}
                  className=" h-14 mt-1  border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-left flex items-center">

                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
          
                  </span>
                </th>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.descricao}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.quantidade}
                </td>
                <td className="bg-green-100 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.situacao}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.identificador}
                </td>
                
                {/*<td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">*/}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0   text-center">
                  
                  {/** EDITAR */}
                  <button onClick={()=> EditarNecessidade(incident.id_necessidade)} type="submit">
                    <Link to="/admin/AlterarNecessidade">
                    <i class="px-4 fas fa-edit"></i>
                    </Link>
                  </button>
                  

                  {/** RECEBER EXCLUIR */}
                  <button onClick={()=> handleDeleteIncident(incident.id_necessidade)} type="submit"
                   class="text-indigo-600 hover:text-indigo-900">
                     <i class="px-4 far fa-trash-alt"></i>
                     
                  </button>

                  {/** RECEBER DOAÇÃO */}
                  <button onClick={()=> ReceberDoacao (incident.id_necessidade)} type="submit"
                   class="text-indigo-600 hover:text-indigo-900">
                     <i class="px-4 fas fa-people-carry"></i>
                  </button>
                </td>

              </tr>
            </tbody>      
            )
          )}
        </table>  
      </div>
    </div>
  </>
);
}

NecessidadesOng.defaultProps = {
  color: "dark",
};

NecessidadesOng.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
export default NecessidadesOng;