import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import apiSlice from "../apiSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    api: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default appStore;