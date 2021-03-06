import React, {useEffect, useState} from 'react';
import {BigItemImage, ButtonToBuyCar, DivForDescription, DivWithBorders} from "./BigItem.styles.js";
import {Link} from "react-router-dom";
import {Price} from "../../App.styles";
import {useSelector} from "react-redux";
import {selectData} from "../../app/data_slice";
import {selectIsLoading} from "../../app/isLoading_slice";

function BigItem() {
    const data = useSelector(selectData)
    const isLoading = useSelector(selectIsLoading)
    const [car, setCar] = useState({title: "", model: "", description: "", id: 0, price: 100})

    useEffect(() => {
        console.log("bigItem's useEffect")
        console.log(data)
        if (!isLoading) {
            setCar(data[0] || car);
        }
    }, [isLoading, car, data])
    return (
        <DivWithBorders>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <DivForDescription>
                    <h1>{car.title} {car.model}</h1>
                    <br/>
                    <h2>{car.description}</h2>
                    <Price>Just for ${car.price}</Price>
                    <ButtonToBuyCar>
                        <Link to={`/catalog/item/${car.id}`}>Buy It!</Link>
                    </ButtonToBuyCar>
                </DivForDescription>
            )}

            <BigItemImage src={"../../Icons/ferrari-sf90.jpg"}/>
        </DivWithBorders>
    );
}

// border above and under element, inside text to the left and image to the right

export default BigItem;