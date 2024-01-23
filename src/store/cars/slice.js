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
        console.log(state.cars);
        state.isLoading = false;
      })
      // .addCase(fetchCars.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchCars.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload.filter((car) => state.favorites.includes(car.id));
        state.isLoading = false;

        // })
        // .addCase(fetchAllCars.pending, (state) => {
        //   state.isLoading = true;
        // })
        // .addCase(fetchAllCars.rejected, (state) => {
        //   state.isLoading = false;
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
    //   .addCase(refreshThunk.fulfilled, (state, { payload }) => {
    //     state.user = payload;
    //     state.isLoggedIn = true;
    //     state.isRefresh = false;
    //   })
    //   .addCase(refreshThunk.pending, (state) => {
    //     state.isRefresh = true;
    //   })
    //   .addCase(refreshThunk.rejected, (state) => {
    //     state.isRefresh = false;
    //   })
    //   .addMatcher(
    //     isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
    //     (state, { payload }) => {
    //       state.user = payload.user;
    //       state.token = payload.token;
    //       state.isLoggedIn = true;
    //       state.isLoading = false;
    //     }
    //   )
    //   .addMatcher(
    //     isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
    //     (state) => {
    //       state.isLoading = true;
    //       state.isError = null;
    //     }
    //   )

    //   .addMatcher(
    //     isAnyOf(
    //       loginThunk.rejected,
    //       registerThunk.rejected,
    //       logoutThunk.rejected
    //     ),
    //     (state, { payload }) => {
    //       state.isLoading = false;
    //       state.isError = payload;
    //     }
    //   );
  },
});

// export const { changeBalance } = authSlice.actions;
export const carsReducer = slice.reducer;
export const { toggleHeart, handleLoadMore, filteredByPrice } = slice.actions;
