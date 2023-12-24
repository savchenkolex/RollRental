import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isModalOpen: false,
        modalData: ""
    },
    reducers: {
        setModalOpen: (state, action) => {
            state.isModalOpen = true;
            state.modalData = action.payload;
        },
        setModalClose: (state, action) => {
            state.isModalOpen = false;
            state.modalData = "";
        }
    }
})

export const {setModalOpen, setModalClose} = modalSlice.actions;
export default modalSlice.reducer;