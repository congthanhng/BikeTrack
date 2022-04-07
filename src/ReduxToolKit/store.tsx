import { configureStore } from "@reduxjs/toolkit";
import  inputSlice  from "./slices/inputSlice";
import tasksReducer from "./slices/tasksSlice";

export const toolKitStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        input: inputSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof toolKitStore.getState>
// Inferred type: {tasks: TasksState,}
export type AppDispatch = typeof toolKitStore.dispatch