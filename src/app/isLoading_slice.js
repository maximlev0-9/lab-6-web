import {createSlice} from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name:"isLoading",
    initialState :{
        value: false
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setIsLoading} = isLoadingSlice.actions;

export const selectIsLoading = (state) => state.isLoading.value;

export default isLoadingSlice.reducer;
