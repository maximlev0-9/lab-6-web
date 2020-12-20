import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name:"data",
    initialState :{
        cars:[]
    },
    reducers: {
        setData: (state, action) => {
            state.cars = action.payload;
            // return state
        }
    }
})

export const {setData} = dataSlice.actions;

export const selectData = (state) => state.data.cars;

export default dataSlice.reducer;
