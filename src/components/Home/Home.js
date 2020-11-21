import React, {useContext} from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer} from "./Home.styles";
import DataContext from '../../context/data/DataContext';

// future example of card item object={
// id:int
// imageSrc:string
// title:string,
// maxVelocity:int
// powerOfEngine: int,
// lengthInMeters:double,
// weightInKg:double,
// fuelConsumptionPerKm:int,
// TankVolumeInGallons:int
// }



function Home(props) {

    const data = useContext(DataContext)


    return (
        <>
            <BigItem/>
            <ContainerForCardItems>
                <OneMoreContainer>
                    {data.slice(0, 6).map((item) =>
                        <CardItem car={item} key={item.id}/>
                    )}
                </OneMoreContainer>

            </ContainerForCardItems>
        </>
    );
}

export default Home;