import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const taskSlice = createSlice({
  name: "task",
  initialState: {},
  reducers: {
    taskToggled: (state) => {
      state.completed = !state.completed;
    },
  },
});

export const { taskToggled } =
taskSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectTask = (state: RootState) => state.task;

export default taskSlice.reducer;
