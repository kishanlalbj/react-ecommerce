import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/header.component";
import Shop from "./pages/Shop/shop.component";
import Homepage from "./pages/Homepage/homepage.component";
import Auth from "./pages/Auth/auth.component"

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/signin" component={Auth}/>
            </Switch>
        </div>
    );
}

export default App;
