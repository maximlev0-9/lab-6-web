import React from 'react';
import {useParams} from 'react-router-dom';
import {AddToCartButton, CarOptionsText, ItemDetailsTitle, ItemDetailsWrapper, ItemPageWrapper} from "./Item.styles";
import {useSelector} from "react-redux";
import {selectData} from "../../app/data_slice";

function ItemPage() {
    const {id} = useParams()
    const data = useSelector(selectData)
    const item = data.filter(item => {
        // eslint-disable-next-line eqeqeq
        return item.id == id;
    })[0];

    return (
        <ItemPageWrapper>
            <ItemDetailsWrapper src={item.imageSrc}>
                <ItemDetailsTitle>
                    {item.title} {item.model}
                </ItemDetailsTitle>
                <CarOptionsText>
                    Description: {item.description}
                </CarOptionsText>

                <CarOptionsText>
                    Max speed: {item.maxVelocity} Mph
                </CarOptionsText>
                <CarOptionsText>
                    Engine power: {item.powerOfEngine} horse forces
                </CarOptionsText>
                <CarOptionsText>
                    Car weight: {item.weightInKg} kg
                </CarOptionsText>
                <CarOptionsText>
                    Price: {item.price}$
                </CarOptionsText>
                <CarOptionsText>
                    Tank volume: {item.tankVolumeInGallons} gallons
                </CarOptionsText>

                <AddToCartButton>Add to cart</AddToCartButton>
            </ItemDetailsWrapper>
        </ItemPageWrapper>

    );
}

export default ItemPage;