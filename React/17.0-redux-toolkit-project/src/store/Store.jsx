import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import ModalSlice from "./slices/ModalSlice";

export const Store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: ModalSlice
    }
});