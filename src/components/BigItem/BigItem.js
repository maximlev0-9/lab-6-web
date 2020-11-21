import React from 'react';
import {BigItemImage, ButtonToBuyCar, DivForDescription, DivWithBorders} from "./BigItem.styles.js";
import {Link} from "react-router-dom";
import {Price} from "../../App.styles";
import DataContext from '../../context/data/DataContext';

function BigItem(props) {
    const {title, model, description, price, id} = React.useContext(DataContext)[0]
    return (
        <DivWithBorders>
            <DivForDescription>
                <h1>{title} {model}</h1>
                <br/>
                <h2>{description}</h2>
                <Price>Just for {price}</Price>
                <ButtonToBuyCar>
                    <Link to={`/catalog/item/${id}`}>Buy It!</Link>
                </ButtonToBuyCar>
            </DivForDescription>

            <BigItemImage src={"../../Icons/ferrari-sf90.jpg"}/>
        </DivWithBorders>
    );
}

// border above and under element, inside text to the left and image to the right

export default BigItem;