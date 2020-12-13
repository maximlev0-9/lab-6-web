import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState :{
        cars:[]
    },
    reducers: {
        setCartData: (state, action) => {
            state.cars = action.payload;
        },
        appendCartData: (state, action) => {
            let item = {...action.payload};
            item.id = state.cars.length
            state.cars.push(item)
        },
        removeCartItem: (state, action) => {
            console.log("id")
            console.log(action.payload)
            state.cars = state.cars.filter(item => {
                console.log("item")
                console.log(item)
                return item.id != action.payload;
            });
        }
    }
})

export const {setCartData, appendCartData, removeCartItem} = cartSlice.actions;

export const selectCartData = (state) => state.cart.cars;

export default cartSlice.reducer;
