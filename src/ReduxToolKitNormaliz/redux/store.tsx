import { configureStore } from "@reduxjs/toolkit";
import  inputSlice  from "./features/input/inputSlice";
import tasksReducer from "./features/tasks/tasksSlice";

export const toolKitNormalizStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        input: inputSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof toolKitNormalizStore.getState>
// Inferred type: {tasks: TasksState,}
export type AppDispatch = typeof toolKitNormalizStore.dispatch