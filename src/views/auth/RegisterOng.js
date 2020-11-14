import React, {useEffect, useState, useRef} from 'react';

import { Form }      from '@unform/web'
import { useHistory} from 'react-router-dom';

import Input    from '../../components/Form/Input'
import swal     from 'sweetalert'

import api from '../../services/api';

function RegisterOng(data) {

  const formRef = useRef(null)
  const[nome,   setNome]    = useState('');
  const[email,  setEmail]   = useState('');
  const[senha,  setSenha]   = useState('');
  const[cpf,    setCpf]     = useState('');

  
  const history = useHistory();

  useEffect(() => {}, []);

  async function registrarUsuarioOng() {
    //console.log(e)
    const data = {
      nome,
      email,
      cpf,
      senha,
    };

    try {
      
    const resposta = await api.post('usuario/usuario-ong', data);

    if(resposta.data.email){
      swal({
        title: "Usuário Criado com Sucesso!",
        text: `Email de Acesso: ${resposta.data.email}`,
        icon: "success",
        button: "Logar!",
      }); 

         await history.push('/auth/ong')
      } else {
        formRef.current.setErrors({
          nomea:   'NOME  - campo obrigatório',
          emaila:  'EMAIL - campo obrigatório',
          cpfa:    'CPF   - campo obrigatório',
          senhaa:  'SENHA - campo obrigatório',
          });
      }

    } catch(err){
      swal({
        title: "Algo deu errado !",
        text: " Verifique Suas Credenciais !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    Criar Conta - ONG
                  </h6>
                </div>
  
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Form ref={formRef} onSubmit={registrarUsuarioOng}>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      * Nome
                    </label>

                    <Input 
                      name="nomea"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Nome"
                      value={nome}
                      onChange={ e => setNome (e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      * Email
                    </label>

                    <Input 
                      name="emaila"
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={ e => setEmail (e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      * Cpf
                    </label>

                    <Input 
                      name="cpfa"
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="CPF"
                      value={cpf}
                      onChange={ e => setCpf (e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      * Senha
                    </label>

                    <Input 
                      name="senhaa"
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Senha"
                      value={senha}
                      onChange={ e => setSenha (e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Criar Conta
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

export default RegisterOng;