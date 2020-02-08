import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../Utils/firebase.util"
import "./header.styles.scss";
import CartIcon from "../CartIcon/cart-icon.component";
import CartDropdown from "../CartDropdown/cart-dropdown.component";


const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                    <>
                        <div className={"option"} onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        <div>
                            <CartIcon/>
                        </div>
                    </>
                ) : (
                    <Link className={"option"} to={"/signin"}>
                        SIGN IN
                    </Link>
                )
            }
        </div>

        <CartDropdown/>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
