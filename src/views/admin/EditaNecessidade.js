import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'

import api from '../../services/api';

function EditNecessidade() {
  
  const[descricao,	setDescricao]   = useState('');
  
  const ongId   = localStorage.getItem('ongId');
  
  const history = useHistory();
  
	async function atualizaNecessidade(e) {
		e.preventDefault();
		console.log(e)

		const data = {
			descricao
		};

    if(data.descricao == ""){
      swal({
        title: "campos obrigatórios não preenchidos !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
    } else {
      try {
        await api.put(`necessidade/alterar/`, data, {
          headers:{
            Authorization: ongId,
          }
        });
        if(ongId){
          swal({
            title: "Descrição Alterada com sucesso ! ",
            icon: "success",
            button: "Ok!",
          });
          history.push('/admin/dashboard');
        } else {
          swal({
            title: "Erro na atualização ",
            icon: "error",
            button: "Logar",
          });
          history.push('/admin/dashboard');
        }

      } catch(err){
        swal({
          title: "Algo deu errado !",
          icon: "warning",
          button: "Tentar Novamente !",
        });
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full bg-blue-900 ">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0 mt-6" >
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    Editar Necessidade
                  </h6>
                </div>
  
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form onSubmit={atualizaNecessidade}>

                  <div className="relative w-full mb-3" >
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      * Descricao
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      type="text"
                      className="px-3 py-3 placeholder-gray-500 text-gray-900 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Descrição"
                      onChange={(e) => { setDescricao(e.target.value) }}
                      
                    />
                   
                  </div>

               
                  <div className="text-center mt-6">
                    <button
                      
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Finalizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>* Campos obrigatórios</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditNecessidade;