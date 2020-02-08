import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/header.component";
import Shop from "./pages/Shop/shop.component";
import Homepage from "./pages/Homepage/homepage.component";
import Auth from "./pages/Auth/auth.component"
import {auth} from "./Utils/firebase.util"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {

        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            console.log(user);
            this.setState({currentUser: user})
            this.props.history.push("/");
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/signin" component={Auth}/>
                </Switch>
            </div>
        );
    }
}

export default App;
