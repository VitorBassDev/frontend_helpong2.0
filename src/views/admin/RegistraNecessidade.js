import React, {useEffect, useState, useRef} from 'react';
//import../../assets/script/validacao.jsjs"
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'

import Input    from '../../components/Form/Input'
import TextArea from '../../components/Form/TextArea'
 

import api from '../../services/api';

function RegisterNecessidade() {
	const[descricao,	setDescricao]   = useState('');
	const[cep,		setCep]		= useState('');
	const[cidade,		setCidade]		= useState('');
	const[bairro,		setBairro]		= useState('');
	const[logadouro,		setLogadouro]		= useState('');
	const[ddd,		setDdd]		= useState('');
	const[numero,		setNumero]		= useState('');

	const ongId   = localStorage.getItem('ongId');
	const history = useHistory();
  const formRef = useRef(null)

  useEffect(() => {}, []);
  
  async function registrarNecessidade(e) {
    //e.preventDefault();
  
		//console.log(data)

		const data = {
			descricao,
      cep,
      cidade,
      bairro, 
      logadouro,
      ddd,
      numero
    };

  
		try {
			const resposta = await api.post('necessidade/registraNecessidade', data, {
				headers:{
					Authorization: ongId,
				}
			});
			if(resposta.data.identificador){
				swal({
					title: "Necessidade Cadastrada com Sucesso ! ",
					text: `Código de Rastreio: ${resposta.data.identificador}`,
					icon: "success",
					button: "Ok!",
				});
				history.push('/admin/dashboard');
			} else {/*
				swal({
          title: "Algo deu errado ok !",
          text: " Tente novamente !",
          icon: "warning",
          button: "Tentar Novamente !",
				
        });
        */
       formRef.current.setErrors({
        cidade:       ' CIDADE   - campo obrigatório',
        descricao:    'DESCRIÇÃO - campo obrigatório',
        cep:          'CEP       - campo obrigatório',
        bairro:       'BAIRRO    - campo obrigatório',
        logadouro:    'LOGADOURO - campo obrigatório',
        ddd:          'DDD       - campo obrigatório',
        numero:       'NUMERO    - campo obrigatório',
  
      })
				history.push('/admin/necessidade');
      }

      /*
      if(
        data.descricao === "" ||  
        data.cep       == "" || 
        data.cidade    == "" || 
        data.bairro    == "" ||
        data.logadouro == "" ||
        data.ddd       == "" ||
        data.numero    == "" 
      ) {
        swal({
          title: "Campos Obrgatórios não preenchidos ",
          text: "Preencha todos os campos",
          icon: "error",
          button: "Tentar Novamente",
        });
      }
      */

		} catch(err){
			swal({
      	title: "Usuário Não encontrado ",
					text: "Faça login para registrar sua necessidade",
					icon: "error",
					button: "Logar",
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

              <Form ref={formRef} onSubmit={registrarNecessidade}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Descricao
                    </label>
                    <TextArea
                      name="descricao"
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
                      Cidade
                    </label>
                    <Input 
                      name="cidade"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 form-control cep-mask"
                      placeholder="Cidade"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Bairro
                    </label>
                    <Input
                      name="bairro"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Bairro"
                      value={bairro}
							      	onChange={(e) => setBairro(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Logadouro
                    </label>

                    <Input
                      name="logadouro"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Logadouro"
                      value={logadouro}
                      onChange={(e) => setLogadouro(e.target.value)
                      }  
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      CEP
                    </label>

                    <Input
                      name="cep"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="CEP"
                      value={cep}
							      	onChange={(e) => setCep(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      DDD
                    </label>

                    <Input
                      name="ddd"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="DDD"
                      maxLength="3"
                      value={ddd}
							      	onChange={(e) => setDdd(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Numero
                    </label>

                    <Input
                      name="numero"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Numero"
                      value={numero}
							      	onChange={(e) => setNumero(e.target.value)}
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
                
              </Form>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterNecessidade;