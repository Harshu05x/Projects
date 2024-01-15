import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
};

const ModalSlice = createSlice( {
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.show = true;
        },
        hideModal: (state) => {
            state.show = false;
        }
    }
});

export const { showModal, hideModal } = ModalSlice.actions;

export default ModalSlice.reducer;