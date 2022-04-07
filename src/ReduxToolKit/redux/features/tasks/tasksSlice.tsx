import {  createSlice } from "@reduxjs/toolkit";
import {taskAddedHandle,taskRemovedHandle,taskCompletedHandle,taskToggledHandle} from "./caseReducerHandle"

export type TaskState = {
  id: number;
  description: String;
  completed: boolean;
};

export type TaskListState = TaskState[];

// Define the initial state using that type
const initialState: TaskListState = [
  { id: 0, description: "Learn React", completed: true },
  { id: 1, description: "Learn Redux", completed: false },
  { id: 2, description: "Build something fun!", completed: false },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    taskAdded: taskAddedHandle,
    taskRemoved: taskRemovedHandle,
    taskCompleted: taskCompletedHandle,
    taskToggled: taskToggledHandle,
  },
});
// const selectTodoEntities = (state) => state.tasks;

export const { taskAdded, taskRemoved, taskCompleted, taskToggled } =
  tasksSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default tasksSlice.reducer;
