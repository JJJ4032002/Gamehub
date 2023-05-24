import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityModalState: false,
  communityData: {},
  userCommunities: [],
};

export const selectCommunityData = (state) => state.subreddit.communityData;

export const selectCommunityModalState = (state) =>
  state.subreddit.communityModalState;

export const selectUserCommunitiesData = (state) =>
  state.subreddit.userCommunities;

// export const selectCurrentSubredditData = (state: RootState) =>
//   state.subreddit.currentSubredditData;

const subredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {
    setCommunityData: (state, action) => {
      state.communityData = action.payload;
    },
    toggleCommunityModalState: (state) => {
      state.communityModalState = !state.communityModalState;
    },
    setUserCommunities: (state, action) => {
      state.userCommunities = action.payload;
    },
  },
});

export const {
  setCommunityData,
  toggleCommunityModalState,
  setUserCommunities,
} = subredditSlice.actions;

export default subredditSlice.reducer;
