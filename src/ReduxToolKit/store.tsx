import { configureStore } from "@reduxjs/toolkit";
import  inputSlice  from "./slices/inputSlice";
import taskReducer from "./slices/taskSlice";
import tasksReducer from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        task: taskReducer,
        input: inputSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {tasks: TasksState,}
export type AppDispatch = typeof store.dispatch