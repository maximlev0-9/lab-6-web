import {configureStore} from '@reduxjs/toolkit'
import data_reducer from './data_slice'
import isLoading_reducer from './isLoading_slice'
import cart_reducer from './cart_slice'

export default configureStore({
    reducer: {
        data: data_reducer,
        isLoading: isLoading_reducer,
        cart: cart_reducer
    }
})