import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import {Link } from "react-router-dom";
import api from '../../services/api';

import PropTypes from "prop-types";

function NecessidadesOng({ color }) {
  const history = useHistory();
		
  const [necessidade, setNecessidade] = useState([]);
  
  const ongId  = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('usuario/usuario-all', {

    headers: {
      Authorization: ongId,
    }
    }).then(response =>{
      setNecessidade(response.data);
    })
  }, [ongId]);
  
  async function deletarUsuario(id_necessidade){
    try{

      swal({
        title: "Tem que deseja excluir este usuário?",
        text: " Clique em OK",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: "Usuário exclído com sucesso",
            icon: "success",
            button: "Ok!",
          });
          api.delete(`usuario/deletaUsuarioTest/${id_necessidade}`, {
            headers:{
              Authorization: ongId,
            }
          },
          );  
          setNecessidade(necessidade.filter(incident => incident.id_necessidade!==id_necessidade ));
          history.push('/adminFull/dashboard');
          
        } else {
          swal({
            title: "Operação Cancelada",
            icon: "sucess",
            button: "Ok!",
          });
        }
      });
  
  } catch (err){

    swal({
      title: "Algo deu errado !",
      text: " Tente excluír novamente !",
      icon: "warning",
      button: "Tentar Novamente !",
    
    });
  }
}

async function EditarNecessidade(id_necessidade){
  try{
    await api.get(`necessidade/buscaId/${id_necessidade}`, {
      headers:{
        Authorization: ongId,
      }
    },
    history.push('/adminFull/dashboard'),
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
        (color === "dark" ? "bg-white" : "bg-blue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
            <h3
              className={
                "font-semibold text-lg  uppercase text-center"  +
                (color === "light" ? "text-gray-800" : "text-white")
              }
            >
              Todos os usuários
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
                ID
              </th>
            
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                NOME
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
              EMAIL
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                CPF
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                IDENTIFICADOR
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                PERFIL
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                  (color === "light"
                    ? "bg-gray-100 text-gray-600 border-gray-200"
                    : "bg-blue-800 text-blue-300 border-blue-700")
                }
              >
                ações
              </th>
            </tr>
          </thead>

          {necessidade.map(incident =>(
            <tbody>
              <tr  key={incident.id_usuario} >
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
                
                >
                {incident.id_usuario}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.nome}
                </td>
                <td className="bg-green-100 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.email}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.cpf}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.identificador}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                {incident.perfil}                
                </td>
                
                {/*<td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">*/}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0   text-center">
                  
                  {/** EDITAR */}
                  <button onClick={()=> EditarNecessidade(incident.id_usuario)} type="submit">
                    <Link to="/admin/AlterarNecessidade">
                    <i class="px-4 fas fa-edit"></i>
                    </Link>
                  </button>
                  

                  {/** EXCLUIR */}
                  <button onClick={()=> deletarUsuario(incident.id_usuario)} type="submit"
                   class="text-indigo-600 hover:text-indigo-900">
                     <i class="px-4 far fa-trash-alt"></i> 
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