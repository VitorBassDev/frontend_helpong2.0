import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'

import api from '../../services/api';

function RegisterNecessidade() {
	const[descricao,	setDescricao]   = useState('');
	const[quantidade, setQuantidade]  = useState('');
	const[situacao,		setSituacao]		= useState('');

	const ongId   = localStorage.getItem('ongId');
	//const ongCpf  = localStorage.getItem('ongCpf');
	const history = useHistory();
	
	async function registrarNecessidade(e) {
		e.preventDefault();
		//console.log(e)

		const data = {
			descricao,
			quantidade,
			situacao,
		};

		try {
			const resposta = await api.post('necessidade/registraNecessidade', data, {
				headers:{
					Authorization: ongId,
				}
			});
			if(ongId){
				swal({
					title: "Necessidade Cadastrada com Sucesso ! ",
					text: `Código de Rastreio: ${resposta.data.identificador}`,
					icon: "success",
					button: "Ok!",
				});
				history.push('/admin/dashboard');
			} else {
				swal({
					title: "Usuário Não encontrado ",
					text: "Faça login para registrar sua necessidade",
					icon: "error",
					button: "Logar",
				});
				history.push('/admin/necessidade');
			}

		} catch(err){
			swal({
        title: "Algo deu errado !",
        text: " Veriique Suas Credenciais !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
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
                    Nova Necessidade
                  </h6>
                </div>
  
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
 
                <form onSubmit={registrarNecessidade}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Descricao
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      type="text"
                      className="px-3 py-3 placeholder-gray-500 text-gray-900 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Descrição"
                      value={descricao} 
                      onChange={(e) => { setDescricao(e.target.value) }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      quantidade
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Quantidade"
                      value={quantidade}
                      onChange={e => setQuantidade(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Situação
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Situação"
                      value={situacao}
							      	onChange={(e) => setSituacao(e.target.value)}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterNecessidade;