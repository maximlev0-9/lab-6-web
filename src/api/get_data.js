import {setIsLoading} from "../app/isLoading_slice";
import axios from "axios";
import {setData} from "../app/data_slice";

const apiUrl = `http://localhost:8000/api/cars`;

export const loadData = (dispatch) => {
    return () => {
        console.log("useEffect of Home")

        const fetchData = async () => {
            dispatch(setIsLoading(true))
            const res = await axios.get(apiUrl);
            const cars = res.data;
            console.log("cars from request")
            console.log(cars)

            dispatch(setData(cars))
            // setViewedData(cars)

            dispatch(setIsLoading(false))
        };
        console.log("result of fetchData")
        console.log(fetchData());
    };
}

export default loadData