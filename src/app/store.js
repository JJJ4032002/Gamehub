import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationslice";
import cartReducer from "../features/cart/cartSlice";
import { apiSlice } from "../features/api/apiSlice";
import artworksReducer from "../features/artworks/artworksSlice";
export default configureStore({
  reducer: {
    auth: authenticationReducer,
    cart: cartReducer,
    artworks: artworksReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
