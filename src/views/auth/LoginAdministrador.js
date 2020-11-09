import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert'
import api from '../../services/api';

function LoginOng() {

  const [email, setEmail] = useState('');
  const [senha_usuario, setPassword] = useState('');

  const history = useHistory(); 

  async function handleLogin(e){
    e.preventDefault();
    try{
      const resposta = await api.post('autenticacao/authAdministrador', {email, senha_usuario} );
      
      console.log(resposta.data.usuario.nome);
      swal({
        title: "Perfil Verificado!",
        text: "Usuário logado com Sucesso!",
        icon: "success",
        button: "Ok!",
      });      
      //alert(`Usuario Logado: ${resposta.data.usuario.nome}`);
      localStorage.setItem('ongId',  resposta.data.usuario.id_usuario);      
      localStorage.setItem('ongNome',  resposta.data.usuario.nome);      
      localStorage.setItem('ongEmail',  resposta.data.usuario.email);      
      localStorage.setItem('ongCpf',  resposta.data.usuario.cpf);      
      localStorage.setItem('ongToken',  resposta.data.token);        
      
      await history.push('/')
      
    } catch (err) {
      swal({
        title: "Algo deu errado !",
        text: " Verifique Suas Credenciais !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
    }
  }

  return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    Realizar Login
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
   
              <form onSubmit={handleLogin}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"             
                      placeholder="Email" 

                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      label="Email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) =>  setEmail(e.target.value) }
                      
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      SENHA
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={senha_usuario}
                      onChange={(e) =>  setPassword(e.target.value) }
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Logar
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
                  <small>Esquici Minha Senha</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-gray-300">
                  <small>Criar Conta</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default LoginOng;
