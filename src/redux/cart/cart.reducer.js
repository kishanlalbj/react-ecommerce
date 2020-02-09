import {CART_ACTION_TYPES} from "./cart.types";

const INITIAL_STATE = {
    isHidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isHidden: !state.isHidden

            };
        case CART_ACTION_TYPES.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;