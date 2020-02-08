import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/header.component";
import Shop from "./pages/Shop/shop.component";
import Homepage from "./pages/Homepage/homepage.component";

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
    </div>``
  );
}

export default App;
