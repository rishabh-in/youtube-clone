import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggelMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  }
})

export const {toggelMenu, updateVideoList} = appSlice.actions;

export default appSlice.reducer;