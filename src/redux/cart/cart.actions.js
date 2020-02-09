import {CART_ACTION_TYPES} from "./cart.types";

export const toggleCart = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART
});

export const addItemToCart = (item) => ({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: item
});

