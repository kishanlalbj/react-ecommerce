import React from "react";
import "./auth.styles.scss";
import Signin from "../../components/SignIn/signin.component";
import SignUp from "../../components/SignUp/signup.component";

const Auth = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin/>
            <SignUp/>
        </div>
    )
};

export default Auth;

