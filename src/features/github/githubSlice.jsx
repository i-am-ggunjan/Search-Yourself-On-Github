import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = githubSlice.actions;
export default githubSlice.reducer;

//! Thunk
export const fetchData = createAsyncThunk(
  "github/fetch",
  async (searchuser) => {
    const res = await fetch(`https://api.github.com/users/${searchuser}`);
    const data = await res.json();
    return data;
  }
);
