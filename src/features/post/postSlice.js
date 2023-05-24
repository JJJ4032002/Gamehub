import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: "",
};

export const selectPostId = (state) => state.post.postId;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const { setPostId } = postSlice.actions;

export default postSlice.reducer;
