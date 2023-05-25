import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import finalUserDataSlice from './finalUserDataSlice';
import productReducer from './productSlice';
import profileSlice from './profileSlice';
import userloginSlice from './userloginSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        profile:profileSlice,
        loginTemp:userloginSlice,
        orderUserData:finalUserDataSlice
    },
});

export default store;