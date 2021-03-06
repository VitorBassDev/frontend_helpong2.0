import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';

// layouts
import Admin from "layouts/Admin.js";
import AdminFull from "layouts/AdminFull.js";
import Auth from "layouts/Auth.js";

//import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Landing.js";

import Doacao from "./components/Doacao/ListaDoacao.js"

export default function Routes(){
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/profile" exact component={Profile} />   
      <Route path="/doacao" exact component={Doacao} />
      
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/adminFull" component={AdminFull} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </BrowserRouter>
  );
}



