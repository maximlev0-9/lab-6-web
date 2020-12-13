import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import DataContext from "../../context/data/DataContext";
import {AddToCartButton, CarOptionsText, ItemDetailsTitle, ItemDetailsWrapper, ItemPageWrapper} from "./Item.styles";

function ItemPage() {
    const {id} = useParams()
    const {data} = useContext(DataContext);
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
                    Tank volume: {item.TankVolumeInGallons} gallons
                </CarOptionsText>

                <AddToCartButton>Add to cart</AddToCartButton>
            </ItemDetailsWrapper>
        </ItemPageWrapper>

    );
}

export default ItemPage;