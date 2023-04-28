import { configureStore } from "@reduxjs/toolkit";
import GithubReducer from "../features/github/githubSlice";

export const store = configureStore({
  reducer: {
    github: GithubReducer,
  },
});
