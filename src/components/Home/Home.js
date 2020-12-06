import React, {useContext, useState} from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer, ViewMoreButton} from "./Home.styles";
import DataContext from '../../context/data/DataContext';

function Home(props) {

    const {data} = useContext(DataContext)
    const [limit, setLimit] = useState(3)

    const handleViewMore = () => {
        setLimit(limit+3)
    }

    return (
        <>
            <BigItem/>
            <ContainerForCardItems>
                <OneMoreContainer>
                    {data.slice(0, limit).map((item) =>
                        <CardItem car={item} key={item.id}/>
                    )}
                </OneMoreContainer>
                <ViewMoreButton onClick={handleViewMore}>View more...</ViewMoreButton>
            </ContainerForCardItems>
        </>
    );
}

export default Home;