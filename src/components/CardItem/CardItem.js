import React from 'react';
import {CardItemDiv, CardItemIcon, CardItemButtonMoreInfo} from "./CardItem.slyles";
import {Price} from "../../App.styles";

function CardItem({imageSrc="tesla-x",title = "Ferrari", price = 100000, description = "lol", model = "XLS"}) {
    return (
        <CardItemDiv>
            <CardItemIcon
                src={`../../Icons/${imageSrc}.jpg`} alt={""}
            />
            <h2>{title} {model}</h2>
            <p>Description: {description}</p>
            <CardItemButtonMoreInfo>More info</CardItemButtonMoreInfo>

        </CardItemDiv>
    );
}

export default CardItem;