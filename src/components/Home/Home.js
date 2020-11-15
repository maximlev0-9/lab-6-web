import React from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer} from "./Home.styles";

// future example of card item object={
// id:int
// imageSrc:string
// title:string,
// sizeOfDisks:double,
// powerOfEngine: int,
// lengthInMeters:double,
// weightInKg:double,
// споживанняГалонЗаКм:int,
// BakVolumeInGallons:int
// }

function Home(props) {
    let data = [
        {
            id: 1,
            title: "Ferrari",
            imageSrc:"ferrari-sf90",
            price: 10000000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "SF90 Stradale"
        },
        {
            id: 2,
            title: "Ferrari",
            imageSrc:"ferrari-812",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "812"
        },
        {
            id: 3,
            imageSrc:"tesla-cybertruck",
            title: "Tesla",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "Cybertruck"
        },
        {
            id: 4,
            imageSrc:"tesla-x",
            title: "Tesla",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "X"
        },{
            id: 6,
            imageSrc:"tesla-s",
            title: "Tesla",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "S"
        },
        {
            id: 8,
            imageSrc:"porshe-cayenne",
            title: "Porshe",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "Cayenne"
        },
        {
            id: 5,
            imageSrc:"ferrari-f8",
            title: "Ferrari",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "F8"
        },
        {
            id: 7,
            imageSrc:"tesla-y",
            title: "Tesla",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "Y"
        },


    ]
    return (
        <>
            <BigItem/>
            <ContainerForCardItems>
                <OneMoreContainer>
                    {data.slice(0, 6).map((value) =>
                        <CardItem title={value.title}
                                  description={value.description}
                                  model={value.model}
                                  price={value.price}
                                  imageSrc={value.imageSrc}
                                  key={value.id}
                        />
                    )}
                </OneMoreContainer>

            </ContainerForCardItems>
        </>
    );
}

export default Home;