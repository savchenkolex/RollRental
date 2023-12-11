import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filters: {
            selectedBrand: "",
            selectedPrice: "",
            minMileage: "",
            maxMileage: "",
        },
        filtersFavorite: {
            selectedBrand: "",
            selectedPrice: "",
            minMileage: "",
            maxMileage: "",
        },
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },
        resetFilters: (state) => {
            state.filters.selectedBrand = "";
            state.filters.selectedPrice = "";
            state.filters.minMileage = "";
            state.filters.maxMileage = "";
        },
        setFiltersFavorite: (state, action) => {
            state.filtersFavorite = {
                ...state.filtersFavorite,
                ...action.payload,
            };
        },
        resetFiltersFavorite: (state) => {
            state.filtersFavorite.selectedBrand = "";
            state.filtersFavorite.selectedPrice = "";
            state.filtersFavorite.minMileage = "";
            state.filtersFavorite.maxMileage = "";
        }
    }
})

export const {
    setFilters,
    resetFilters,
    setFiltersFavorite,
    resetFiltersFavorite,
  } = filtersSlice.actions;
  export default filtersSlice.reducer;