import React from 'react';
import {BigItemImage, ButtonToBuyCar, DivForDescription, DivWithBorders} from "./BigItem.styles";
import {Link} from "react-router-dom";
import {Price} from "../../App.styles";
import {DataContext} from "../../App";

function BigItem(props) {
    const item = React.useContext(DataContext)[0]
    return (
        <DivWithBorders>
            <DivForDescription>
                <h1>{item.title} {item.model}</h1>
                <br/>
                <h2>{item.description}</h2>
                <Price>Just for {item.price}</Price>
                <ButtonToBuyCar>
                    <Link to={`/catalog/item/${item.id}`}>Buy It!</Link>
                </ButtonToBuyCar>
            </DivForDescription>

            <BigItemImage src={"../../Icons/ferrari-sf90.jpg"}/>
        </DivWithBorders>
    );
}

// border above and under element, inside text to the left and image to the right

export default BigItem;