import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: [],
}

export const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        login: (state,payload) => {
            state.currentUser = payload.payload;
        },
    }
});

export const{login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;