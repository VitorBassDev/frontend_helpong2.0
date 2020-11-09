import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";

// views

import LoginOng from "views/auth/LoginOng.js";
import CadastrarOng from "views/auth/RegisterOng.js";

import LoginDoador from "views/auth/LoginDoador.js";
import CadastrarDoador from "views/auth/RegisterDoador.js";

import LoginAdministrador from "views/auth/LoginAdministrador.js";
import CadastrarAdministrador from "views/auth/RegisterAdministrador.js";


export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/ong" exact component={LoginOng} />
            <Route path="/cria/ong" exact component={CadastrarOng} />
            
            <Route path="/auth/doador" exact component={LoginDoador} />
            <Route path="/cria/doador" exact component={CadastrarDoador} />

            <Route path="/auth/administrador" exact component={LoginAdministrador} />
            <Route path="/cria/administrador" exact component={CadastrarAdministrador} />
            
            <Redirect from="/auth" to="/auth/ong" />
          </Switch>
        </section>
      </main>
    </>
  );
}
