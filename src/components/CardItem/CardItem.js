import React from 'react';
import {
    AddToCartButton,
    CardItemButtonsWrapper,
    CardItemDiv,
    CardItemIcon,
    CardItemLinkMoreInfo
} from "./CardItem.slyles";
import {Price} from "../../App.styles";

function CardItem({car, children}) {
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
                <AddToCartButton>Add to cart</AddToCartButton>
                <CardItemLinkMoreInfo exact={"true"} to={`catalog/item/${id}`}>
                    More info
                </CardItemLinkMoreInfo>
            </CardItemButtonsWrapper>
            {children}
        </CardItemDiv>
    );
}

export default CardItem;