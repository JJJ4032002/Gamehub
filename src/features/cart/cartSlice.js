import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let element = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (element === undefined) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        element.quantity += 1;
      }
    },
    removeFromCart(state, action) {
      let element = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (element.quantity === 1) {
        let elementIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItems.splice(elementIndex, 1);
      } else {
        element.quantity -= 1;
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartProducts = (state) => state.cart.cartItems;
export default cartSlice.reducer;
