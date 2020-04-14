import React from "react";
import "./css/App.css";
import Main from "./pages";
import Login from "./pages/Login";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
