import { createSlice } from "@reduxjs/toolkit";


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

export default inputSlice.reducer;