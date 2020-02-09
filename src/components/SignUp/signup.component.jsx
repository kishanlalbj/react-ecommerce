import React from "react";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import {auth, createUserProfile} from "../../Utils/firebase.util";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            displayName: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) =>
        this.setState({[event.target.name]: event.target.value});

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(this.state);

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return null;
        } else {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);

                await createUserProfile(user, {displayName});
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            } catch (e) {
                console.log("error creating user");
            }
        }
    }

    render() {
        return (
            <div className={"sign-up"}>
                <h2 className={"title"}>I do not have an account</h2>
                <span> Create New Account</span>
                <form className={"sign-up-form"} onSubmit={this.handleSubmit}>

                    <FormInput
                        name={"displayName"}
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required={true}
                        type={"text"}
                        label={"Name"}
                    />

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

                    <FormInput
                        type={"password"}
                        onChange={this.handleChange}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        value={this.state.confirmPassword}
                    />
                    <CustomButton type={"submit"}>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )

    }
}

export default SignUp;

