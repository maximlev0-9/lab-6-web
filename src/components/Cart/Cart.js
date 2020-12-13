import React, {useEffect, useState} from 'react';
import CardItem from "../CardItem/CardItem";
import {CatalogWrapper} from "../Catalog/Catalog.styles";
import DataContext from "../../context/data/DataContext";
import {RemoveButton} from "./Cart.styles";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {selectData, setData} from "../../app/data_slice";
import {selectIsLoading, setIsLoading} from "../../app/isLoading_slice";
import {removeCartItem, selectCartData} from "../../app/cart_slice";

const apiUrl = `http://localhost:8000/api/cars`;

function Cart() {
    const viewedData = useSelector(selectCartData)
    const dispatch = useDispatch();

    return (
        <>
            <p>Your Items</p>
            <CatalogWrapper>
                {viewedData.map(item => (<>
                    <CardItem key={item.id}
                              car={item}>
                        <RemoveButton onClick={() => dispatch(removeCartItem(item.id))} />
                    </CardItem>
                </>))}
            </CatalogWrapper>
        </>
    );
}

export default Cart;