import React from 'react';
import {BigItemImage, ButtonToBuyCar, DivForDescription, DivWithBorders, Price} from "./BigItem.styles";
import {Link} from "react-router-dom";

function BigItem(props) {
    return (
        <DivWithBorders>
            <DivForDescription>
                <h1>Ferrari SF90 Stradale</h1>
                <br/>
                <h2>Super-cool modern fast and powerful sexy new Ferrari with which all girls would be yours</h2>
                <Price>Just for 100000000$</Price>
                <ButtonToBuyCar>
                    <Link to={"/catalog/item/1"}>Buy It!</Link>
                </ButtonToBuyCar>
            </DivForDescription>
            <BigItemImage src={"../../Icons/ferrari-sf90.jpg"}/>
        </DivWithBorders>
    );
}

// border above and under element, inside text to the left and image to the right

export default BigItem;