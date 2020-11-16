import React, { useState} from 'react';
import { useHistory} from 'react-router-dom';
import swal from 'sweetalert'

import api from '../../services/api';

function CardSettings() {
  const ongPerfil = localStorage.getItem('ongPerfil')
  const ongId   = localStorage.getItem('ongId');
  const ongNome = localStorage.getItem('ongNome')
  const ongEmail = localStorage.getItem('ongEmail')
  const ongCpf  = localStorage.getItem('ongCpf')


  const[nome,   setNome]    = useState(ongNome);
  const[email,  setEmail]   = useState(ongEmail);
  const[cpf,    setCpf]     = useState(ongCpf);

  const history = useHistory();

  async function alterarPerfil(e) {
    e.preventDefault();
    //console.log(e)

    const data = {
      nome,
      email,
      cpf,
    };

    try {
      //const resposta = await api.post('usuario/usuario-ong', data);

      await api.patch('usuario/usuarioEditar', data, {
				headers:{
					Authorization: ongId,
        }
        
      });

			if(ongId){
      swal({
        title: "Usuário Alterado com Sucesso!",
        text: "Realize o Login novamente",
        icon: "success",
        button: "Ok!",
      });

      if(ongPerfil == 2){
        history.push('/auth/Administrador')
      }else{
        history.push('/auth/ong')
      }
      localStorage.clear();

    }
  
  
    } catch(err){
      swal({
        title: "Algo deu errado !",
        text: " Tente Novamente !",
        icon: "warning",
        button: "Tentar Novamente !",
      });
    }
  }

  /*
  useEffect(() => {
    const data = {
      idUser: ongId
    }
    async function getUsuario(){
    const resposta = await api.post("usuario/usuarioUnicoTest", data, 
    
    {

    headers: {
      Authorization: ongId,
    }
    }).then(response =>{
      setUsuario(response.data);
      
    })
    getUsuario();
  }
   
  }, [ongId]);

  /*
  useEffect(() => {
    async function getUsuario(){
    const response = await api.get('usuario/usuarioUnicoTest/'+id);
    setNome(response.data.nome),
    setEmail(response.data.email),
    setCpf (response.data.cpf)
     //console.log(response)

    }
    getUsuario();
  }, [ongId]);

  */
  return (
    <>
      
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0"
      >
      <form onSubmit={alterarPerfil}>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Meus Dados</h6>

            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              value={alterarPerfil}
            >
              Salvar
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Informações do Usuário
            </h6>
 
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3"
              
                >
                  
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    
                  >
                   NOME
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-700 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    //defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    onChange={(e) => { setNome(e.target.value) }}
                    placeholder={ongNome}
                    value={nome}
                    
                  
                  />

                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   EMAIL
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-700 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    //defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder={email}
                    value={email}
                    
                  />
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CPF
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    //defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    
                    onChange={(e) => { setCpf(e.target.value) }}
                    placeholder={cpf}
                    value={cpf}
                  />
                </div>
              </div>

            </div>
        </div>
       </form>
      </div>
    </>
  );
}
export default CardSettings;
