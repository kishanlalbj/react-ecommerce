import React from "react";
import "./cart-dropdown.styles.scss"

import CustomButton from "../CustomButton/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className={"cart-items"}>

        </div>

        <CustomButton> CHECKOUT</CustomButton>
    </div>
);
export default CartDropdown;