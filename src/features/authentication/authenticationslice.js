import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, loading: true };

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const { setUser, setLoading } = authenticationSlice.actions;
export default authenticationSlice.reducer;
