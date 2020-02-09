import React from "react";
import {connect} from "react-redux";

import "./collection-item.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {addItemToCart} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItemToCart}) => {
    console.log("ITEM", item);
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => addItemToCart(item)}> add to cart </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
