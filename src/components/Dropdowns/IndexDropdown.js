import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [dropdownPopoverShowLogin, setDropdownPopoverShowLogin] = React.useState(false);

  const btnDropdownRef = React.createRef();
  const btnDropdownRefLogin = React.createRef();

  const popoverDropdownRef = React.createRef();
  const popoverDropdownRefLogin = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const openDropdownPopoverLogin = () => {
    createPopper(btnDropdownRefLogin.current, popoverDropdownRefLogin.current, {
      placement: "",
    });
    setDropdownPopoverShowLogin(true);
  };  
  const closeDropdownPopoverLogin = () => {
    setDropdownPopoverShowLogin(false);
  };

  return (
    <>
      <a
        className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Login
      </a> 
      <div>
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
          Logar como
          
        </span>
        <Link
          to="/auth/ong"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          ONG
        </Link>
        <Link
          to="/auth/doador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Doador
        </Link>
        <Link
          to="/auth/administrador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Administrador
        </Link>
          <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        
      </div>
    </div>

      <a
        className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShowLogin ? closeDropdownPopoverLogin() : openDropdownPopoverLogin();
        }}
      >
        Cadastro
      </a>
      <div
        ref={popoverDropdownRefLogin}
        className={
          (dropdownPopoverShowLogin ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Cadastrar como
          
        </span>
        <Link
          to="auth/ong"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          ONG
        </Link>
        <Link
          to="/cria/doador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Doador
        </Link>
        <Link
          to="/cria/administrador"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Administrador
        </Link>
          <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        
      </div>
    </>
  );
};

export default IndexDropdown;
