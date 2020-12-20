import React from "react";
import {useHistory} from 'react-router-dom';
import CardItem from "../CardItem/CardItem";
import { CatalogWrapper } from "../Catalog/Catalog.styles";
import { CartTitleText, RemoveButton, BuyButton, BuyButtonWrapper } from "./Cart.styles";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, selectCartData } from "../../app/cart_slice";

function Cart() {
    const viewedData = useSelector(selectCartData);
    const dispatch = useDispatch();
    
    const history = useHistory();

    const handleBuyClick = (_) => {
        if (viewedData.length!==0){
            history.push("/checkout");
        } else {
            alert('Add any items to cart!')
        }
    }
    
    return (
    <>
        <CartTitleText>Your Items</CartTitleText>
        <CatalogWrapper>
        {viewedData.map((item) => (
            <>
            <CardItem key={item.id} car={item}>
                <RemoveButton onClick={() => dispatch(removeCartItem(item.id))} />
            </CardItem>
            </>
        ))}
        </CatalogWrapper>
        <BuyButtonWrapper>
            <BuyButton onClick={handleBuyClick}>Buy items!</BuyButton>
        </BuyButtonWrapper>
        
    </>
    );
}

export default Cart;
