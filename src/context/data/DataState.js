import React, {useEffect, useState} from 'react';
import DataContext from "./DataContext";
import axios from 'axios'

let hardcodedData = [
    {
        id: 1,
        title: "Ferrari",
        imageSrc: "ferrari-sf90",
        price: 10000000,
        description: "Super-cool modern fast and powerful sexy new Ferrari with which all girls would be yours\n",
        model: "SF90 Stradale",
        maxVelocity: 312,
        powerOfEngine: 800,
        lengthInMeters: 4.5,
        weightInKg: 2000,
        tankVolumeInGallons: 80,
    },
    {
        id: 2,
        title: "Ferrari",
        imageSrc: "ferrari-812",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "812",
        maxVelocity: 311,
        powerOfEngine: 750,
        lengthInMeters: 4.3,
        weightInKg: 2000,
        tankVolumeInGallons: 80,
    },
    {
        id: 3,
        imageSrc: "tesla-cybertruck",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Cybertruck",
        maxVelocity: 288,
        powerOfEngine: 398,
        lengthInMeters: 4.5,
        weightInKg: 2000,
        tankVolumeInGallons: 80,
    },
    {
        id: 4,
        imageSrc: "tesla-x",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "X",
        maxVelocity: 250,
        powerOfEngine: 786,
        lengthInMeters: 4.2,
        weightInKg: 2300,
        tankVolumeInGallons: 80,
    }, {
        id: 6,
        imageSrc: "tesla-s",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "S",
        maxVelocity: 280,
        powerOfEngine: 777,
        lengthInMeters: 5.5,
        weightInKg: 2000,
        tankVolumeInGallons: 80,
    },
    {
        id: 8,
        imageSrc: "porshe-cayenne",
        title: "Porshe",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Cayenne",
        maxVelocity: 300,
        powerOfEngine: 1000,
        lengthInMeters: 4.0,
        weightInKg: 2300,
        tankVolumeInGallons: 80,
    },
    {
        id: 5,
        imageSrc: "ferrari-f8",
        title: "Ferrari",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "F8",
        maxVelocity: 248,
        powerOfEngine: 999,
        lengthInMeters: 5.1,
        weightInKg: 2500,
        tankVolumeInGallons: 80,
    },
    {
        id: 7,
        imageSrc: "tesla-y",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Y",
        maxVelocity: 100,
        powerOfEngine: 488,
        lengthInMeters: 4.8,
        weightInKg: 1600,
        tankVolumeInGallons: 80,
    },
]

function DataState({children}) {
    const [data, setData] = useState( []);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            const res = await axios.get(`http://localhost:8000/api/cars`);

            const cars = res.data;
            setData(cars);
            setIsLoading(false)
        };

        fetchData();
    }, [])


    return (
        <DataContext.Provider value={{data, setData, isLoading, setIsLoading}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataState;