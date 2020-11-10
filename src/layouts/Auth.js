import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

//import Navbar from "components/Navbars/AuthNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

// views

import LoginOng     from "views/auth/LoginOng.js";
import RegisterLogin from "views/auth/RegisterOng.js";

import LoginDoador      from "views/auth/LoginDoador.js";
import CadastrarDoador  from "views/auth/RegisterDoador.js";

import LoginAdministrador     from "views/auth/LoginAdministrador.js";
import CadastrarAdministrador from "views/auth/RegisterAdministrador.js";


function Auth() {
  return (
    <>
      <IndexNavbar transparent />
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
            <Route path="/auth/registerOng"  component={RegisterLogin} />
            
            <Route path="/auth/doador" exact component={LoginDoador} />
            <Route path="/auth/registerDoador"  component={CadastrarDoador} />

            <Route path="/auth/administrador" exact component={LoginAdministrador} />
            <Route path="/auth/registerAdministrador"  component={CadastrarAdministrador} />
            
            <Redirect from="/auth" to="/auth/ong" />
          </Switch>
        </section>
      </main>
    </>
  );
}

export default Auth;
