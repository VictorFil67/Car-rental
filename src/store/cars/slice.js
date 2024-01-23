import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { loginThunk, logoutThunk, registerThunk, refreshThunk } from "./thunk";
import { fetchAllCars, fetchCars, fetchFilteredCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    favorites: [],
    isLoading: false,
    isError: null,
    cars: [],
    page: 1,
    price: 0,
  },
  reducers: {
    toggleHeart: (state, { payload }) => {
      const favorite = state.favorites.find((item) => item === payload);
      favorite
        ? state.favorites.splice(
            state.favorites.findIndex((item) => item === payload),
            1
          )
        : state.favorites.push(payload);
    },
    handleLoadMore: (state) => {
      state.page += 1;
    },
    filteredByPrice: (state, { payload }) => {
      state.price = payload.value;
      console.log(state.price);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.page !== 1
          ? (state.cars = [...state.cars, ...payload])
          : (state.cars = payload);
        state.isLoading = false;
      })
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload.filter((car) => state.favorites.includes(car.id));
        state.isLoading = false;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, { payload }) => {
        state.price
          ? (state.cars = payload.filter(
              (car) => parseInt(car.rentalPrice.replace("$", "")) <= state.price
            ))
          : (state.cars = payload);
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchCars.pending, fetchAllCars.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(fetchCars.rejected, fetchAllCars.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const carsReducer = slice.reducer;
export const { toggleHeart, handleLoadMore, filteredByPrice } = slice.actions;
