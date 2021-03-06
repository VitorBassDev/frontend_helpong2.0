import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert'

const IndexDropdown = () => {

  const ongId   = localStorage.getItem('ongId');
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

  const history = useHistory();
  function handleLogout(){

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
        className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Login &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; Cadastro
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Login
        </span>
        <Link
          to="/auth/ong"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          ONG
        </Link>

          {/*
        <Link
          to="/auth/doador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Doador
        </Link>
          */}
        <Link
          to="/auth/administrador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Administrador
        </Link>

        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Cadastro
        </span>
        <Link
          to="/auth/registerOng"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          ONG
        </Link>
       

        <Link
         onClick={handleLogout}
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Sair
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
