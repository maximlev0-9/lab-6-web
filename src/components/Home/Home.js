import React from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer} from "./Home.styles";

// future example of card item object={
// id:int
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
            price: 10000000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: "SR90 ojcmnfv"
        },
        {
            id: 2,
            title: "Ferrari",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: ""
        },
        {
            id: 3,
            title: "Ferrari",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: ""
        },
        {
            id: 4,
            title: "Ferrari",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: ""
        },
        {
            id: 5,
            title: "Ferrari",
            price: 254000,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
            model: ""
        },
    ]
    return (
        <div>
            <BigItem/>
            <ContainerForCardItems>
                <OneMoreContainer>
                    {data.slice(0,6).map((value) =>
                        <CardItem title={value.title}
                                  description={value.description}
                                  model={value.model}
                                  price={value.price}/>
                    )}
                </OneMoreContainer>

            </ContainerForCardItems>
        </div>
    );
}

export default Home;