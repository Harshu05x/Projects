import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        chatId: null,
        user: {}
    },
    reducers: {
        chatReducer: (state,action) => {
            const {user,currentUser} = action.payload;
            state.user = user,
            state.chatId = currentUser.uid > user.uid ? 
            currentUser.uid + user.uid : 
            user.uid + currentUser.uid
            console.log(state.user );
            console.log(state.chatId );
        }
    }
    }
);

export const {chatReducer} = ChatSlice.actions;
export default ChatSlice.reducer;