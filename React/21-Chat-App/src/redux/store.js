import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './features/AuthSlice';
import ChatSlice from './features/ChatSlice';


export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    chat: ChatSlice
  },
});
