import React, {useEffect, useState} from 'react';
import CardItem from "../CardItem/CardItem";
import {CatalogWrapper} from "../Catalog/Catalog.styles";
import DataContext from "../../context/data/DataContext";
import {RemoveButton} from "./Cart.styles";
import axios from "axios";

const apiUrl = `http://localhost:8000/api/cars`;

function Cart() {
    const {data, setData, isLoading, setIsLoading} = React.useContext(DataContext);
    const [viewedData, setViewedData] = useState(data);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            const res = await axios.get(apiUrl);

            const cars = res.data;
            setData(cars);
            setViewedData(cars)
            setIsLoading(false)
        };

        console.log(fetchData());
    }, [])

    return (
        <>
            <CatalogWrapper>
                {viewedData.map(item => (<>
                    <CardItem key={item.id}
                              car={item}>
                        <RemoveButton id={item.id}/>
                    </CardItem>
                </>))}
            </CatalogWrapper>
        </>
    );
}

export default Cart;