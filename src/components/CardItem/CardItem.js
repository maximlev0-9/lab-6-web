import React from 'react';
import {
    AddToCartButton,
    CardItemButtonsWrapper,
    CardItemDiv,
    CardItemIcon,
    CardItemLinkMoreInfo
} from "./CardItem.slyles";
import {Price} from "../../App.styles";
import {appendCartData} from "../../app/cart_slice";
import {useDispatch} from "react-redux";

function CardItem({car, children}) {
    const dispatch = useDispatch()

    const {id = 1, imageSrc = "tesla-x", title = "Ferrari", description = "lol", model = "XLS", price=0} = car;
    return (
        <CardItemDiv>
            <CardItemIcon
                src={`../../Icons/${imageSrc}.jpg`} alt={""}
            />
            <h2>{title} {model}</h2>
            <p>Description: {description}</p>
            <Price>${price}</Price>
            <CardItemButtonsWrapper>
                <AddToCartButton onClick={() => {dispatch(appendCartData(car))}}>Add to cart</AddToCartButton>
                <CardItemLinkMoreInfo exact={"true"} to={`catalog/item/${id}`}>
                    More info
                </CardItemLinkMoreInfo>
            </CardItemButtonsWrapper>
            {children}
        </CardItemDiv>
    );
}

export default CardItem;