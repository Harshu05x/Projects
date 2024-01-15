import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { showModal } from "./ModalSlice";
// import { CartItems } from '../../assets/CartItems'

const initialState = {
    cartItems: [],
    amt: 0,
    total: 0,
    isLoading: false,
}

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk( "cart/getCartItems",
    async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong");
        }
    })

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        },
        removeItem: (state,actions) => {
            let id = actions.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        increase: (state,actions) => {
            const id = actions.payload;
            const item = state.cartItems.find (item => item.id === id);
            item.amount++;
        },
        decrease: (state,actions) => {
            const id = actions.payload;
            const item = state.cartItems.find (item => item.id === id);
            item.amount--;
        },
        calculations: (state) => {
            let total = 0;
            let amt = 0;
            state.cartItems.forEach(item => {
                total += item.amount;
                amt += item.amount * item.price;
            })
            state.total = total;
            state.amt = amt.toFixed(2);
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }

})

export const { clearCart , removeItem, increase, decrease, calculations} = cartSlice.actions;

export default cartSlice.reducer;