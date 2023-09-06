/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file: ProductSlice.js
*/
// Make http request from Redux

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService';
import { toast } from "react-toastify";


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
export const createProduct = createAsyncThunk(
    "products/create",
    async (formData, thunkAPI) => {
      try {
        return await productService.createProduct(formData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );




const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
        console.log("store product")
    }
  },
  extraReducers: (builder) => {
    builder
        // Cases for Create a product
        .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            console.log(action.payload);
            state.products.push(action.payload);
            toast.success("Produit ajouté avec succès !");
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
  }
});

export const {CALC_STORE_VALUE} = productSlice.actions

export const selectIsLoading = (state) => state.product.isLoading;

export default productSlice.reducer