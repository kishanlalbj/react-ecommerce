import React from "react"
import "./signin-styles.scss";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import {SigninWithGoogle} from "../../Utils/firebase.util";

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: "",
            password: ""
        })
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div className={"sign-in"}>
                <h2>I already have a account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name={"email"}
                        onChange={this.handleChange}
                        value={this.state.email}
                        required={true}
                        type={"email"}
                        label={"Email"}
                    />

                    <FormInput
                        type={"password"}
                        onChange={this.handleChange}
                        name={"password"}
                        label={"Password"}
                        value={this.state.password}
                    />
                    <CustomButton type={"submit"}>
                        Sign in
                    </CustomButton>
                    &nbsp;
                    <CustomButton onClick={SigninWithGoogle} style={
                        {
                            backgroundColor: "#4c8bf5"
                        }
                    }>
                        Google Sign in
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin
