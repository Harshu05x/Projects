import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";


export const Store = configureStore({
    reducer:{
        cart: CartSlice   
    }
})