import React from 'react';
import {CardItemDiv, CardItemIcon} from "./CardItem.slyles";

function CardItem({title = "Ferrari", price = 100000, description = "lol", model = "XLS"}) {
    return (
        <CardItemDiv>
            <CardItemIcon src={"../../Icons/car.jpg"} alt={""}/>
            <p>{title} {model}</p>
            <p>${price}</p>
            <p>{description}</p>
            <button>More info</button>

        </CardItemDiv>
    );
}

export default CardItem;