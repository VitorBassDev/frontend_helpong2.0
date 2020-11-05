import React from "react";
import {useHistory} from 'react-router-dom';
import { createPopper } from "@popperjs/core";
import {FiPower} from 'react-icons/fi';

function UserDropdown(e) {
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
    localStorage.clear();
    history.push('/');
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
          <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
          </span>
        </div>
      </a>

    </>
  );
};

export default UserDropdown;
