import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TaskListState } from "./tasksSlice";

// export const taskAddedHandle: CaseReducer<TaskListState,PayloadAction<String>> = (state, action) => {
//   const index = state.length === 0 ? 1 : state[state.length - 1].id + 1;
//   if (action.payload != "")
//     state.push({ id: index, description: action.payload, completed: false });
// };

// export const taskRemovedHandle: CaseReducer<TaskListState,PayloadAction<number>> = (state, action) => {
//   return state.filter(({ id }) => id !== action.payload);
// };

// export const taskCompletedHandle: CaseReducer<TaskListState,PayloadAction<number>> = (state, action) => {
//   const existingTask = state.find((task) => task.id === action.payload);
//   if (existingTask) {
//     existingTask.completed = true;
//   }
// };

// export const taskToggledHandle: CaseReducer<TaskListState,PayloadAction<number>> = (state, action) => {
//   const existingTask = state.find(({ id }) => id === action.payload);
//   if (existingTask) {
//     existingTask.completed = !existingTask.completed;
//   }
// };
