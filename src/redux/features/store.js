/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file: store.js
 */

import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },

});