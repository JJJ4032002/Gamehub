import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationslice";
import { apiSlice } from "../features/api/apiSlice";
export default configureStore({
  reducer: {
    auth: authenticationReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
