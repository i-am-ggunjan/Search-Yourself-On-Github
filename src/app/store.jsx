import { configureStore } from "@reduxjs/toolkit";
import GithubReducer from "../features/github/GithubSlice";

export const store = configureStore({
  reducer: {
    github: GithubReducer,
  },
});
