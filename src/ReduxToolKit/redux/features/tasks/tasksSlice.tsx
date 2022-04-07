import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createSelector } from "reselect";


// Define the initial state using that type
const initialState = [
  { id: 0, description: "Learn React", completed: true },
  { id: 1, description: "Learn Redux", completed: false },
  { id: 2, description: "Build something fun!", completed: false },
];
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    taskAdded: (state, action) => {
      const { description } = action.payload;
      const index = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      if (action.payload.description != "")
        state.push({ id: index, description: description, completed: false });
    },
    taskRemoved: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload.id);
    },
    taskCompleted: (state, action) => {
      const { id } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.completed = true;
      }
    },
    taskToggled: (state, { payload }) => {
      const existingTask = state.find(({ id }) => id === payload.id);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
  },
});
// const selectTodoEntities = (state) => state.tasks;

export const { taskAdded, taskRemoved, taskCompleted, taskToggled } = tasksSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default tasksSlice.reducer;
