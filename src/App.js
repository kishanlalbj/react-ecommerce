import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header/header.component";
import Shop from "./pages/Shop/shop.component";
import Homepage from "./pages/Homepage/homepage.component";
import Auth from "./pages/Auth/auth.component"
import {auth, createUserProfile} from "./Utils/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            console.log(userAuth);
            if (userAuth) {
                const userRef = await createUserProfile(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });

            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const {currentUser} = this.props;
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/signin" render={() => (
                        currentUser ? <Redirect to={"/"}/> : <Auth/>
                    )}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
