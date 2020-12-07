import React from 'react';
import {CardItemDiv, CardItemIcon, CardItemButtonMoreInfo} from "./CardItem.slyles";
import {Link} from "react-router-dom";

function CardItem({car}) {
    const {id = 1, imageSrc = "tesla-x", title = "Ferrari", description = "lol", model = "XLS"} = car;
    return (
        <CardItemDiv>
            <CardItemIcon
                src={`../../Icons/${imageSrc}.jpg`} alt={""}
            />
            <h2>{title} {model}</h2>
            <p>Description: {description}</p>
            <CardItemButtonMoreInfo exact={"true"} to={`catalog/item/${id}`}>
                {/*<Link >*/}
                    More info
                {/*</Link>*/}
            </CardItemButtonMoreInfo>

        </CardItemDiv>
    );
}

export default CardItem;