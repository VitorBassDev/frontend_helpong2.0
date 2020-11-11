import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/SidebarAdmin.js";
import HeaderStats from "components/Headers/HeaderStatsAdmin.js";


// views

import Dashboard from "views/adminFull/DashboardAdmin.js";
import Settings from "views/adminFull/Settings.js";
import Tables from "views/adminFull/TablesNecessidade.js";
//import Necessidade from "views/adminFull/RegistraNecessidade.js";
import AlterarUsuario from "views/adminFull/EditaUsuario.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
      <AdminNavbar />
        {/* Header */}

        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 mt-20">
          <Switch>
            <Route path="/adminFull/dashboard" exact component={Dashboard} />
           
            <Route path="/adminFull/settings" exact component={Settings} />
            <Route path="/adminFull/tables" exact component={Tables} />

            <Route path="/adminFull/AlterarUsuario" exact component={AlterarUsuario} />
            <Redirect from="/adminFull" to="/adminFull/dashboard" />
          </Switch>
     
        </div>
      </div>
    </>
  );
}
