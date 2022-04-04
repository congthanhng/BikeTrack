import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    textChanged: (state, {payload}) => {
      return payload;
    },
  },
});

export const { textChanged } =inputSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectInput = (state: RootState) => state.input;

export default inputSlice.reducer;