export const selectCars = (state) => state.catalog.carsData;
export const selectAllCars = (state) => state.catalog.allCars;
export const selectOneCar = (state) => state.catalog.selectedCar;
export const selectBrands = (state) => state.catalog.brands;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error
export const selectPage = (state) => state.catalog.page;

export const selectFavorites = (state) => state.favorites.favorites;

export const selectFilters = (state) => state.filters.favorites;
export const selectFiltersFav = (state) => state.filters.filtersFavorite;