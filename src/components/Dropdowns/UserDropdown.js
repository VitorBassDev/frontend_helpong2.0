import React from "react";
import {useHistory} from 'react-router-dom';
import { createPopper } from "@popperjs/core";
import {FiPower} from 'react-icons/fi';
import swal from 'sweetalert'

function UserDropdown(e) {

  const ongId   = localStorage.getItem('ongId');
  const history = useHistory();

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  
  function sair(){

    try {

      if  (ongId)   {
        localStorage.clear();
        history.push('/');
        swal({
          title: "Usuário Desconectado!",
          icon: "success",
          button: "Ok!",
        });    
      } else {
        swal({
          title: "Nenhum Usuário Conectado !",
          icon: "warning",
          button: "Ok !",
        });
      }

    } catch (err) {
      swal({
        title: "Algo deu errado !",
        text: " VerTente novamente !",
        icon: "error",
        button: "Tentar Novamente !",
      });
    }
  }
	
  return (
    <>
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <button onClick={sair} type="button">
              <FiPower size={18} color="#e02041" />
            </button>
          </span>
        </div>
      </a>
    </>
  );
};

export default UserDropdown;
