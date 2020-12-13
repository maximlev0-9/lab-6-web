import React, {useEffect} from 'react';
import CardItem from "../CardItem/CardItem";
import {CatalogWrapper} from "../Catalog/Catalog.styles";
import {CartTitleText, RemoveButton} from "./Cart.styles";
import {useDispatch, useSelector} from "react-redux";
import {removeCartItem, selectCartData} from "../../app/cart_slice";

function Cart() {
    const viewedData = useSelector(selectCartData)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Cart")
        console.log(viewedData)
    })
    return (
        <>
            <CartTitleText>Your Items</CartTitleText>
            <CatalogWrapper>
                {viewedData.map(item => (<>
                    <CardItem key={item.id}
                              car={item}>
                        <RemoveButton onClick={() => dispatch(removeCartItem(item.id))}/>
                    </CardItem>
                </>))}
            </CatalogWrapper>
        </>
    );
}

export default Cart;