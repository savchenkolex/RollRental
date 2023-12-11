import { createSlice } from "@reduxjs/toolkit";
import { getCarsWithPagination, getAllCars, getCarById, getBrands } from "./operations";

const handlePending = (state) => {
state.isLoading = true;
};

const handleRejected = (state, action) => {
state.isLoading = false;
state.error = action.payload;
if(state.isModalOpen) {
    state.isModalOpen = false;
}
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        carsData: [],
        allCars: [],
        brands: [],
        selectedCar: [],
        isModalOpen: false,
        isLoading: false,
        error: null,
        page: 1,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCarsWithPagination.pending, handlePending)
            .addCase(getCarsWithPagination.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.carsData = [...state.carsData, ...action.payload];
            })
            .addCase(getCarsWithPagination.rejected, handleRejected)
            .addCase(getAllCars.pending, handlePending)
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.allCars = [...action.payload];
            })
            .addCase(getAllCars.rejected, handleRejected)
            .addCase(getCarById.pending, handlePending)
            .addCase(getCarById.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.isModalOpen = true;
                state.selectedCar = action.payload;
            })
            .addCase(getCarById.rejected, handleRejected)
            .addCase(getBrands.pending, handlePending)
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.brands = action.payload;
            })
            .addCase(getBrands.rejected, handleRejected)
    },
    reducers: {
        onNextPage: (state) => {
            state.page = state.page + 1;
        },
    },
});

export const {onNextPage} = catalogSlice.actions;
export default catalogSlice.reducer;