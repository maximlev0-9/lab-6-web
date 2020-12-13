import React, {useEffect, useState} from 'react';
import BigItem from "../BigItem/BigItem";
import CardItem from "../CardItem/CardItem";
import {ContainerForCardItems, OneMoreContainer, ViewMoreButton} from "./Home.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectData} from "../../app/data_slice";
import {selectIsLoading} from "../../app/isLoading_slice";
import {loadData} from "../../api/get_data";

function Home() {
    const data = useSelector(selectData)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(3)

    useEffect(loadData(dispatch), []);

    const handleViewMore = () => {
        setLimit(limit + 3)
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