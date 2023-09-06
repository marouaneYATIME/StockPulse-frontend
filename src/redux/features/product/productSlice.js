/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file: ProductSlice.js
*/
// Make http request from Redux

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    totalStoreValue: 0,
    outOfStock: 0,
    category: [],
};

// Create a new product
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
        console.log("store product")
    }
  },
  extraReducers: (builder) => {


  }
});

export const {CALC_STORE_VALUE} = productSlice.actions

export default productSlice.reducer