import React, {useContext} from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer} from "./Home.styles";
import {DataContext} from "../../App";

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

    const data = useContext(DataContext)


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