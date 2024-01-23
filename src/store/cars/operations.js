import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
// import axios from "axios";

export const fetchCars = createAsyncThunk(
  "fetchCars",
  async (page, thunkAPI) => {
    try {
      const { data } = await api(`car-rental?&limit=12&page=${page}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  "fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await api(`car-rental`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  "fetchFilteredCars",
  async ({ make, rentalPrice }, thunkAPI) => {
    try {
      const { data } = await api(`car-rental`, {
        params: { make, rentalPrice },
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
